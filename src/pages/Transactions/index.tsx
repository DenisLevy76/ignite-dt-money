import { HeaderComponent } from '../../components/HeaderComponent';
import { TransactionsPageContainer } from './styles';

export const Transactions: React.FC = () => {
  return (
    <TransactionsPageContainer>
      <HeaderComponent />
      <h1>Home</h1>
    </TransactionsPageContainer>
  );
};
