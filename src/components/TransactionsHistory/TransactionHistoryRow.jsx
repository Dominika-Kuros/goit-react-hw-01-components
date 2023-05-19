import css from './TransactionsHistory.module.css'

export const TransactionHistoryRow = ({type, amount, currency}) => {
   return ( <tr className={css.tr} >
      <td className={css.type}>{type}</td>
      <td className={css.amount}>{amount}</td>
      <td className={css.currency}>{currency}</td>
    </tr>)
  };