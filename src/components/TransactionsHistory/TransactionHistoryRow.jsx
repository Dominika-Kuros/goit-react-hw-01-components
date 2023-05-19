import css from './TransactionsHistory.module.css';
import PropTypes from 'prop-types';

export const TransactionHistoryRow = ({ type, amount, currency }) => {
  return (
    <tr className={css.tr}>
      <td className={css.type}>{type}</td>
      <td className={css.amount}>{amount}</td>
      <td className={css.currency}>{currency}</td>
    </tr>
  );
};

TransactionHistoryRow.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
