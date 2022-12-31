import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useSummary } from '../../hooks/useSummary';
import { priceFormatter } from '../../utils/priceFormatter';
import { SumarryContainer, SumarryItem } from './styles';

export const SummaryComponent: React.FC = () => {
  const theme = useContext(ThemeContext);

  const { income, outcome, total } = useSummary();

  return (
    <SumarryContainer>
      <SumarryItem>
        <header>
          <h4>Entrada</h4>
          <ArrowCircleUp size={32} color={theme['green-500']} />
        </header>
        <strong>{priceFormatter(income)}</strong>
      </SumarryItem>
      <SumarryItem>
        <header>
          <h4>Saída</h4>
          <ArrowCircleDown size={32} color={theme['red-500']} />
        </header>
        <strong>- {priceFormatter(outcome)}</strong>
      </SumarryItem>
      <SumarryItem color={total > 0 ? 'green' : 'red'}>
        <header>
          <h4>Total</h4>
          <CurrencyDollar size={32} color={theme['gray-100']} />
        </header>
        <strong>{priceFormatter(total)}</strong>
      </SumarryItem>
    </SumarryContainer>
  );
};
