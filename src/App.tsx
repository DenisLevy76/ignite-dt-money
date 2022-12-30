import { ThemeProvider } from 'styled-components'
import { Transactions } from './pages/Transactions'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/defaultTheme'

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Transactions />
      <GlobalStyles />
    </ThemeProvider>
  )
}
