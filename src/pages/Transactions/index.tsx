import { MagnifyingGlass } from 'phosphor-react';
import { useContext, useState } from 'react';
import { ContainerComponent } from '../../components/ContainerComponent';
import { InputComponent } from '../../components/inputComponent';
import { SummaryComponent } from '../../components/SummaryComponent';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { TransactionComponent } from './components/TransactionComponent';
import { SearchButton, TransactionsPageContainer } from './styles';

export const Transactions: React.FC = () => {
  const { transactions } = useContext(TransactionsContext);

  return (
    <TransactionsPageContainer>
      <ContainerComponent>
        <SummaryComponent />
        <form>
          <InputComponent type="text" placeholder="Busque uma transação" />
          <SearchButton>
            <MagnifyingGlass size={20} />
            buscar
          </SearchButton>
        </form>
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
