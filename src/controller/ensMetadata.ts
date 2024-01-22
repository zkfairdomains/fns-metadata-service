import { strict as assert }        from 'assert';
import { Contract }                from 'ethers';
import { Request, Response }       from 'express';
import { FetchError }              from 'node-fetch';
import {
  ContractMismatchError,
  ExpiredNameError,
  NamehashMismatchError,
  UnsupportedNetwork,
  Version,
}                                  from '../base';
import {
  ADDRESS_ETH_REGISTRY,
  ETH_REGISTRY_ABI,
  RESPONSE_TIMEOUT,
}                                  from '../config';
import { checkContract }           from '../service/contract';
import { getDomain }               from '../service/domain';
import { Metadata }                from '../service/metadata';
import getNetwork, { NetworkName } from '../service/network';
import { constructEthNameHash }    from '../utils/namehash';

export async function ensMetadata(req: Request, res: Response) {

  res.setTimeout(RESPONSE_TIMEOUT, () => {
    res.status(504).json({ message: 'Timeout' });
    return;
  });

  const { contractAddress, networkName, tokenId } = req.params;
  const { provider, SUBGRAPH_URL } = getNetwork(networkName as NetworkName);
  const last_request_date = Date.now();
   

  try {
    
    const result = await getDomain(
      provider,
      networkName as NetworkName,
      SUBGRAPH_URL,
      contractAddress,
      tokenId,
      Version.v1,
      false
    );

    // add timestamp of the request date
    result.last_request_date = last_request_date;
    /* #swagger.responses[200] = { 
      description: 'Metadata object',
      schema: { $ref: '#/definitions/ENSMetadata' }
    } */
    res.json(result);
    return;
  } catch (error: any) {
    console.log(error)
    const errCode = (error?.code && Number(error.code)) || 500;
    /* #swagger.responses[500] = { 
             description: 'Internal Server Error'
    } */
    /* #swagger.responses[501] = { 
           description: 'Unsupported network' 
    } */
    if (
      error instanceof FetchError ||
      error instanceof ContractMismatchError ||
      error instanceof ExpiredNameError ||
      error instanceof NamehashMismatchError ||
      error instanceof UnsupportedNetwork
    ) {
      if (!res.headersSent) {
        res.status(errCode).json({
          message: error.message,
        });
        return;
      }
    }

    try {
      // Here is the case; if subgraph did not index fresh ENS name but registry has the record,
      // instead of 'not found' send positive unknown metadata information
      const registry = new Contract(
        ADDRESS_ETH_REGISTRY,
        ETH_REGISTRY_ABI,
        provider
      );
      if (!tokenId ) {
        throw 'Missing parameters to construct namehash';
      }
      const _namehash = constructEthNameHash(tokenId, Version.v1);
      const isRecordExist = await registry.recordExists(_namehash);
      assert(isRecordExist, 'ENS name does not exist');

      // When entry is not available on subgraph yet,
      // return unknown name metadata with 200 status code
      const { url, ...unknownMetadata } = new Metadata({
        name: 'unknown.name',
        description: 'Unknown ENS name',
        created_date: 1580346653000,
        tokenId: '',
        version: Version.v1,
        // add timestamp of the request date
        last_request_date
      });
      res.status(200).json({
        message: unknownMetadata,
      });
      return;
    } catch (error) {}

    /* #swagger.responses[404] = {
      description: 'No results found'
    } */
    if (!res.headersSent) {
      res.status(404).json({
        message: 'No results found.',
      });
    }
  }
}