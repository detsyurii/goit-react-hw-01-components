import PropTypes from 'prop-types';
import {
  TransactionTable,
  Head,
  HeadItem,
  TableList,
  TableItem,
} from './TransactionHistory.styled';

export function TransactionHistory({ items }) {
  return (
    <TransactionTable>
      <Head>
        <tr>
          <HeadItem>Type</HeadItem>
          <HeadItem>Amount</HeadItem>
          <HeadItem>Currency</HeadItem>
        </tr>
      </Head>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TableList key={id}>
            <TableItem>{type}</TableItem>
            <TableItem>{amount}</TableItem>
            <TableItem>{currency}</TableItem>
          </TableList>
        ))}
      </tbody>
    </TransactionTable>
  );
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
