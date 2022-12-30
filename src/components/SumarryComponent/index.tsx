import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { SumarryContainer, SumarryItem } from './styles';

export const SumarryComponent: React.FC = () => {
  const theme = useContext(ThemeContext);
  return (
    <SumarryContainer>
      <SumarryItem>
        <header>
          <h4>Entrada</h4>
          <ArrowCircleUp size={32} color={theme['green-500']} />
        </header>
        <strong>R$ 17.400,00</strong>
      </SumarryItem>
      <SumarryItem>
        <header>
          <h4>Entrada</h4>
          <ArrowCircleDown size={32} color={theme['red-500']} />
        </header>
        <strong>R$ 17.400,00</strong>
      </SumarryItem>
      <SumarryItem primary={false}>
        <header>
          <h4>Total</h4>
          <CurrencyDollar size={32} color={theme['gray-100']} />
        </header>
        <strong>R$ 17.400,00</strong>
      </SumarryItem>
    </SumarryContainer>
  );
};
