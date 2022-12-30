import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/defaultTheme'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Cachorro branco</h1>
      <GlobalStyles />
    </ThemeProvider>
  )
}
