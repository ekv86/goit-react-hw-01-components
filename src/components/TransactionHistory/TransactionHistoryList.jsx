import PropTypes from 'prop-types';
import { TransactionHistoryEl } from './TransactionHistoryEl';

export const TransactionHistoryList = ({ arr }) => {
  return (
    <tbody>
      {arr.map(el => (
        <TransactionHistoryEl
          type={el.type}
          amount={el.amount}
          currency={el.currency}
          key={el.id}
        />
      ))}
    </tbody>
  );
};

TransactionHistoryList.propTypes = {
  el: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};


