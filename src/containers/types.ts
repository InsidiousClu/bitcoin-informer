import { Block, Transaction } from '../graphql/responseTypes';

export type DetailsScreenRouteParams = { type: 'block' | 'transaction'; data: any };
