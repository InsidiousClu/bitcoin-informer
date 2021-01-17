import * as React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import BitcoinBlocks from '../graphql/queries/bitcoinBlocks.graphql';
import DataList from '../dataViews/DataList';

export default function BlocksInfo({ navigation }: StackScreenProps<any>): JSX.Element {
  return (
    <DataList navigation={navigation} key="blocks" query={BitcoinBlocks} collection="blocks" title="Blocks Info:" />
  );
}
