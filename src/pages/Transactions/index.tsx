import { useContext } from 'react';
import { ContainerComponent } from '../../components/ContainerComponent';
import { SummaryComponent } from '../../components/SummaryComponent';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { SearchForm } from './components/SearchForm';
import { TransactionComponent } from './components/TransactionComponent';
import { TransactionsPageContainer } from './styles';

export const Transactions: React.FC = () => {
  const { transactions } = useContext(TransactionsContext);

  return (
    <TransactionsPageContainer>
      <ContainerComponent>
        <SummaryComponent />
        <SearchForm />
        <table>
          <tbody>
            {transactions.map((transaction) => (
              <TransactionComponent
                key={transaction.id}
                transaction={transaction}
              />
            ))}
          </tbody>
        </table>
      </ContainerComponent>
    </TransactionsPageContainer>
  );
};
