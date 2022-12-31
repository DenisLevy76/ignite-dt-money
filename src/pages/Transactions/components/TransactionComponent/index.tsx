import { PriceHighlight, TableItem } from './styles';
import { TransactionComponentProps } from './types';

export const TransactionComponent: React.FC<TransactionComponentProps> = ({
  transaction: { category, description, type, price, createdAt },
}) => {
  return (
    <TableItem>
      <td>{description}</td>
      <PriceHighlight color={type === 'income' ? 'green' : 'red'}>
        {type === 'income' ? `R$ ${price}` : `- R$ ${price}`}
      </PriceHighlight>
      <td>{category}</td>
      <td className="date">{new Date(createdAt).toISOString()}</td>
    </TableItem>
  );
};
