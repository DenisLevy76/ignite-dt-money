export interface ITransaction {
  id: number;
  description: string;
  price: number;
  category: string;
  type: 'income' | 'outcome'
  createdAt: Date;
}

export interface TransactionComponentProps {
  transaction: ITransaction
}