import { ThemeProvider } from 'styled-components';
import { HeaderComponent } from './components/HeaderComponent';
import { TransactionsContextProvider } from './contexts/TransactionsContext/provider';
import { Transactions } from './pages/Transactions';
import { GlobalStyles } from './styles/global';
import { defaultTheme } from './styles/themes/defaultTheme';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionsContextProvider>
        <HeaderComponent />
        <Transactions />
        <GlobalStyles />
      </TransactionsContextProvider>
    </ThemeProvider>
  );
};
