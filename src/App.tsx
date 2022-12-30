import { ThemeProvider } from 'styled-components';
import { HeaderComponent } from './components/HeaderComponent';
import { Transactions } from './pages/Transactions';
import { GlobalStyles } from './styles/global';
import { defaultTheme } from './styles/themes/defaultTheme';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HeaderComponent />
      <Transactions />
      <GlobalStyles />
    </ThemeProvider>
  );
};
