import * as React from 'react';
import { StackScreenProps } from '@react-navigation/stack';

import BitcoinTransactions from '../graphql/queries/bitcoinTransactions.graphql';
import DataList from '../dataViews/DataList';

export default function TransactionInfo({ navigation }: StackScreenProps<any, any>): JSX.Element {
  return (
    <DataList
      navigation={navigation}
      query={BitcoinTransactions}
      key="transactions"
      collection="transactions"
      title="Transactions Info:"
    />
  );
}
