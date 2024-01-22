import { gql } from 'graphql-request';

const ZKF_NAMEHASH =
  '0xfb5f84575b89b73c6f6a4b64bfa657505766152eaf7a7bdcc4ffe2c678d72825';

export const GET_DOMAINS = gql`
  query getDomains($tokenId: String) {
    domain(id: $tokenId) {
      id
      name
      labelName
      createdAt,
      registeredAt,
      expiryDate
      owner {
        id
      }
    }
  }
`;