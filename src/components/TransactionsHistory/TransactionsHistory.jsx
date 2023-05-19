import React from 'react';
import css from './TransactionsHistory.module.css';
import PropTypes from 'prop-types';
import { TransactionHistoryRow } from './TransactionHistoryRow';


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
        <TransactionHistoryRow
          key={id}
          type={type}
          amount={amount}
          currency={currency}
        />
      ))}
    </tbody>
  </table>
);



TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ),
};
