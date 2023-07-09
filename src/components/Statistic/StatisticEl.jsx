import PropTypes from 'prop-types';
import css from './Statistic.module.css';

export const StatisticEl = (({ label, percentage }) => {
    return (
        <>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
        </>
    );
});


StatisticEl.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired
};

