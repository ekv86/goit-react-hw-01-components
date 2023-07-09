import { StatisticEl } from './StatisticEl';
import PropTypes from 'prop-types';
import css from './Statistic.module.css';

export const StatisticList = ({ arr }) => {
    return (
      <ul className={css.statList}>
        {arr.map(el => (
          <li
            className={css.item}
            key={el.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <StatisticEl label={el.label} percentage={el.percentage} />
          </li>
        ))}
      </ul>
    );
}

StatisticList.propTypes = {
    el: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    }))
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}