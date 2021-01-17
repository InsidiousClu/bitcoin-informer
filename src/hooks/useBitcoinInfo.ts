import { useEffect, useRef, useState } from 'react';
import { OperationVariables, useLazyQuery } from '@apollo/client';
import dayjs from 'dayjs';
import { DocumentNode } from 'graphql';

export default function useBitcoinInfo(query: DocumentNode, initialFetch: boolean = true) {
  const offset = useRef(0);
  const [isPaginateLoading, handleLoadingStateChange] = useState(false);
  const [doFetch, { fetchMore, ...rest }] = useLazyQuery(query, {
    variables: {
      limit: 15,
      offset: offset.current,
      network: 'bitcoin',
      from: dayjs().format('YYYY-MM-DD'),
      till: null,
      dateFormat: '%Y-%m-%d',
    },
  });

  const handleLoadMore = async () => {
    offset.current += 15;
    if (fetchMore) {
      handleLoadingStateChange(true);
      await fetchMore({ variables: { offset: offset.current } });
      handleLoadingStateChange(false);
    }
  };

  useEffect(() => {
    if (initialFetch) {
      doFetch();
    }
  }, []);

  return [doFetch, { ...rest, fetchMore, handleLoadMore, isDataChunkLoading: isPaginateLoading }] as [
    () => void,
    OperationVariables & { handleLoadMore: () => void; isDataChunkLoading: boolean }
  ];
}
