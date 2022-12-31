import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 2px solid ${({ theme }) => theme['green-500']};
  }

  body {
    background-color: ${({ theme }) => theme['gray-800']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    color: ${({ theme }) => theme['gray-100']};
    font: 400 1rem 'Roboto', sans-serif;
  }
`