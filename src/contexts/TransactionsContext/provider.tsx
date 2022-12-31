import { ReactNode, useEffect, useState } from 'react';
import { TransactionsContext } from '.';
import { ITransaction } from '../../pages/Transactions/components/TransactionComponent/types';

export const TransactionsContextProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  const getTransactions = async () => {
    const transactionsResponse = await fetch(
      'http://localhost:3333/transactions'
    );

    const transactionsJSON: ITransaction[] = await transactionsResponse.json();

    if (transactionsJSON) setTransactions(transactionsJSON);
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
};
