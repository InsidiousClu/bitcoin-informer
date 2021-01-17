import * as React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { ActivityIndicator } from 'react-native';
import { DocumentNode } from 'graphql';

import useBitcoinInfo from '../hooks/useBitcoinInfo';
import { Block, Transaction } from '../graphql/responseTypes';

import {
  AppFlatList,
  AppListFooter,
  Button,
  CenterContainer,
  ErrorContainer,
  ErrorMessage,
  Layout,
  ScreenTitleText,
} from '../layouts';
import BlockCard from '../layouts/BlockCard';
import TransactionCard from '../layouts/TransactionCard';
import { DetailsScreenRouteParams } from '../containers/types';

type Props = {
  query: DocumentNode;
  collection: 'blocks' | 'transactions';
  title: string;
  key: string;
  navigation: StackNavigationProp<any, any>;
};

export default function DataList({ collection = 'blocks', query, title, navigation }: Props): JSX.Element {
  const [doFetch, { loading, error, data, handleLoadMore, isDataChunkLoading }] = useBitcoinInfo(query);

  const handleNavigate = (params: DetailsScreenRouteParams) => {
    navigation.navigate('Details', params);
  };

  const renderListItem = React.useCallback(
    (currentItem: Transaction | Block): JSX.Element => {
      if (collection === 'transactions') {
        const casted = currentItem as Transaction;

        return <TransactionCard onPress={() => handleNavigate({ type: 'transaction', data: casted })} {...casted} />;
      }
      const casted = currentItem as Block;
      console.log(casted);
      return <BlockCard onPress={() => handleNavigate({ type: 'block', data: casted })} {...casted} />;
    },
    [collection, query]
  );

  return (
    <Layout>
      {loading || !data || error ? (
        <CenterContainer>
          {(loading || !data) && <ActivityIndicator size="large" color="white" />}
          {error && (
            <ErrorContainer>
              <ErrorMessage>Whoops...There is an error, Maybe refetch?</ErrorMessage>
              <Button onPress={doFetch}>Refetch</Button>
            </ErrorContainer>
          )}
        </CenterContainer>
      ) : (
        <AppFlatList
          data={(data?.bitcoin && data.bitcoin[collection]) || []}
          keyExtractor={(block: any, index) => index.toString()}
          ListHeaderComponent={<ScreenTitleText>{title}</ScreenTitleText>}
          ListFooterComponent={
            <AppListFooter>
              <Button onPress={handleLoadMore}>{isDataChunkLoading ? 'Loading Data...' : 'Load more'}</Button>
            </AppListFooter>
          }
          renderItem={({ item }) => renderListItem(item as Transaction | Block)}
        />
      )}
    </Layout>
  );
}
