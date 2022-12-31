import { ITransaction } from '../../pages/Transactions/components/TransactionComponent/types';

export interface TransactionsContextData { transactions: ITransaction[], getTransactions: (query: string) => Promise<void> }