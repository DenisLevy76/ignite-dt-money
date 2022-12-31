import { MagnifyingGlass } from 'phosphor-react';
import { ContainerComponent } from '../../components/ContainerComponent';
import { InputComponent } from '../../components/inputComponent';
import { SumarryComponent } from '../../components/SumarryComponent';
import {
  PriceHighlight,
  SearchButton,
  TableItem,
  TransactionsPageContainer,
} from './styles';

export const Transactions: React.FC = () => {
  return (
    <TransactionsPageContainer>
      <ContainerComponent>
        <SumarryComponent />
        <form>
          <InputComponent type="text" placeholder="Busque uma transação" />
          <SearchButton>
            <MagnifyingGlass size={20} />
            buscar
          </SearchButton>
        </form>
        <table>
          <tbody>
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
          </tbody>
        </table>
      </ContainerComponent>
    </TransactionsPageContainer>
  );
};
