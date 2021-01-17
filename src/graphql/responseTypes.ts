export type Block = {
  __typename: string;
  blockHash: string;
  height: number;
  blockSize: number;
  blockStrippedSize: number;
  chainwork: string;
  difficulty: number;
  transactionCount: number;
  timestamp: {
    time: string;
  };
};

export type Transaction = {
  __typename: string;
  date: {
    date: string;
  };
  index: string;
  inputCount: number;
  outputCount: number;
  inputValue: number;
  outputValue: number;
  feeValue: number;
  minedValue: number;
  txCoinbase: boolean;
  txLocktime: string;
  txSize: number;
  txWeight: number;
  txVersion: number;
};
