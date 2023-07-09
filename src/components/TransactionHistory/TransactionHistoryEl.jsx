import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistoryEl = (({ type, amount, currency }) => {
    return (
      <tr>
        <td>{type}</td>
        <td className={css.amount}>{amount}</td>
        <td className={css.currency}>{currency}</td>
      </tr>
    );
});

TransactionHistoryEl.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
}
