import { ApolloClient, defaultDataIdFromObject, FieldPolicy, InMemoryCache } from '@apollo/client';
import { SafeReadonly } from '@apollo/client/cache/core/types/common';

type Field = { [key: string]: FieldPolicy };

const createCachePolicyForCollectionFields = (collections: { fieldName: string; keyFields: string[] }[]): Field => {
  return collections.reduce((hash, item) => {
    return {
      ...hash,
      [item.fieldName]: {
        keyFields: item.keyFields,
        keyArgs: false,
        merge: (existing = [], incoming: SafeReadonly<any>) => [...existing, ...incoming]
      },
    };
  }, {});
};

const cache = new InMemoryCache({
  dataIdFromObject(responseObject) {
    switch (responseObject.__typename) {
      case 'BitcoinBlock':
        return `BitcoinBlock:${responseObject.height}`;
      case 'BitcoinTransaction':
        return `BitcoinTransaction:${responseObject.index}`;
      default:
        return defaultDataIdFromObject(responseObject);
    }
  },
  typePolicies: {
    Query: {
      fields: {
        bitcoin: {
          merge: (existing, incoming, { mergeObjects }) => {
            return mergeObjects(existing, incoming);
          },
        },
      },
    },
    Bitcoin: {
      fields: createCachePolicyForCollectionFields([
        { fieldName: 'blocks', keyFields: ['height'] },
        { fieldName: 'transactions', keyFields: ['index'] },
      ]),
    },
  },
});

export default function createClient(uri = 'https://graphql.bitquery.io') {
  return new ApolloClient({ uri, cache: cache });
}
