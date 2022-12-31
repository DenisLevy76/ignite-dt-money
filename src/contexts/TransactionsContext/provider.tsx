import { ReactNode, useEffect, useState } from 'react';
import { TransactionsContext } from '.';
import { ITransaction } from '../../pages/Transactions/components/TransactionComponent/types';

export const TransactionsContextProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  const getTransactions = async (query?: string) => {
    const url = new URL('http://localhost:3333/transactions');

    if (query) url.searchParams.append('q', query);

    const transactionsResponse = await fetch(url);

    const transactionsJSON: ITransaction[] = await transactionsResponse.json();

    if (transactionsJSON) setTransactions(transactionsJSON);
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions, getTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
};
