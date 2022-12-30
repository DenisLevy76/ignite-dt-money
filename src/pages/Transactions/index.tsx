import { ContainerComponent } from '../../components/ContainerComponent';
import { SumarryComponent } from '../../components/SumarryComponent';
import { PriceHighlight, TableItem, TransactionsPageContainer } from './styles';

export const Transactions: React.FC = () => {
  return (
    <TransactionsPageContainer>
      <ContainerComponent>
        <SumarryComponent />
        <table>
          <TableItem>
            <td>Desenvolvimento de site</td>
            <PriceHighlight color="green">R$ 12.000,00</PriceHighlight>
            <td>Venda</td>
            <td className="date">13/04/2022</td>
          </TableItem>
          <TableItem>
            <td>Desenvolvimento de site</td>
            <PriceHighlight color="red">- R$ 700,00</PriceHighlight>
            <td>Venda</td>
            <td className="date">13/04/2022</td>
          </TableItem>
        </table>
      </ContainerComponent>
    </TransactionsPageContainer>
  );
};
