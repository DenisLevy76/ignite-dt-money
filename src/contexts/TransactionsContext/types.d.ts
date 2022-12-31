import { ITransaction } from '../../pages/Transactions/components/TransactionComponent/types'
export interface createTransactionsProps {
  category: string
  description: string
  price: number
  type: string
}

export interface TransactionsContextData {
  transactions: ITransaction[]
  getTransactions: (query: string) => Promise<void>
  createTransaction: (transaction: createTransactionsProps) => Promise<void>
}
