import { dateFormatter } from '../../../../utils/dateFormatter';
import { priceFormatter } from '../../../../utils/priceFormatter';
import { PriceHighlight, TableItem } from './styles';
import { TransactionComponentProps } from './types';

export const TransactionComponent: React.FC<TransactionComponentProps> = ({
  transaction: { category, description, type, price, createdAt },
}) => {
  return (
    <TableItem>
      <td>{description}</td>
      <PriceHighlight color={type === 'income' ? 'green' : 'red'}>
        {type === 'outcome' && '- '}
        {priceFormatter(price)}
      </PriceHighlight>
      <td>{category}</td>
      <td className="date">{dateFormatter(new Date(createdAt))}</td>
    </TableItem>
  );
};
