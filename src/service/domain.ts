import { request }        from 'graphql-request';
import { ethers }         from 'ethers';
import { 
  GET_DOMAINS, 
}                         from './subgraph';
import { Metadata }       from './metadata';
import { getAvatarImage } from './avatar';
import {
  ExpiredNameError,
  NamehashMismatchError,
  SubgraphRecordNotFound,
  Version,
}                         from '../base';
import { NetworkName }    from './network';

import { getNamehash }    from '../utils/namehash';

const zkf =
  '0x93cdeb708b7545dc668eb9280176169d1c33cfd8ed6f04690a0bcc88a93fc4ae';
const GRACE_PERIOD_MS = 7776000000; // 90 days as milliseconds

export async function getDomain(
  provider: ethers.providers.BaseProvider,
  networkName: NetworkName,
  SUBGRAPH_URL: string,
  contractAddress: string,
  tokenId: string,
  version: Version,
  loadImages: boolean = true
): Promise<Metadata> {

  let hexId: string, intId;

  if (!tokenId.match(/^0x/)) {
    intId = tokenId;
    hexId = ethers.utils.hexZeroPad(
      ethers.utils.hexlify(ethers.BigNumber.from(tokenId)),
      32
    );
  } else {
    intId = ethers.BigNumber.from(tokenId).toString();
    hexId = tokenId;
  }
  

  const result = await request(SUBGRAPH_URL, GET_DOMAINS, { tokenId: hexId });
  
  const domain = result.domain;
 
  if (!(domain && Object.keys(domain).length))
    throw new SubgraphRecordNotFound(`No record for ${hexId}`);

  const { name, labelName, createdAt, registeredAt, expiryDate, id } = domain;
 
  /**
   * IMPORTANT
   *
   * This check must be done in any case,
   * the reason is unfortunately the graph does strip null characters
   * from names, so even though the namehash is different,
   * domains with or without null byte look identical
   */
 
  /**
  if (getNamehash(label) !== id) {
    throw new NamehashMismatchError(
      `TokenID of the query does not match with namehash of ${label}`,
      404
    );
  }*/
 
  const metadata = new Metadata({
    name: name,
    created_date: createdAt,
    tokenId: hexId,
    version,
  });

  const registered_date = registeredAt * 1000;
  const expiration_date = expiryDate * 1000;
  const creation_date = createdAt * 1000;

  if (expiration_date + GRACE_PERIOD_MS < +new Date()) {
    throw new ExpiredNameError(
      `'${labelName}' is already been expired at ${new Date(
        expiration_date
      ).toUTCString()}.`,
      410
    );
  }
  
  metadata.addAttribute({
    trait_type: 'Registration Date',
    display_type: 'date',
    value: registered_date,
  });

  metadata.addAttribute({
    trait_type: 'Expiration Date',
    display_type: 'date',
    value: expiration_date,
  });

  metadata.addAttribute({
    trait_type: 'Creation Date',
    display_type: 'date',
    value: creation_date,
  });

  async function requestMedia(isAvatarExist: boolean) {
    if (loadImages) {
      metadata.generateImage();
    } else {
      //metadata.setBackground(
      //  `https://metadata.zkfair.domains/${networkName}/avatar/${name}`
      //);
      metadata.setImage(
         `https://metadata.zkfair.domains/${networkName}/${contractAddress}/${hexId}/image`
      );
    }
  }
 
    
  //const isAvatarExist = resolver?.texts && resolver.texts.includes('avatar');
  await Promise.all([requestMedia(false)]);
  return metadata;
}