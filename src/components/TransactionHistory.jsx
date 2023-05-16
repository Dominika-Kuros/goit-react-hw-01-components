import React from 'react';
import css from './css/TransactionsHistory.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => (
  <table className={css.transactionHistory}>
    <thead className={css.thead}>
      <tr className={css.trTitle}>
        <th className={css.type}>Type</th>
        <th className={css.amount}>Amount</th>
        <th className={css.currency}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr className={css.tr} key={id}>
          <td className={css.type}>{type}</td>
          <td className={css.amount}>{amount}</td>
          <td className={css.currency}>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
)};
