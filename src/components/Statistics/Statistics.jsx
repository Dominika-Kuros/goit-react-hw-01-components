import { getRandomColor } from 'utils/getRandomColor';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    {<h2 className={css.title}>{title}</h2>}

    <ul className={css.statList}>
      {stats.map(stat => {
        return (
          <li
            className={css.item}
            key={stat.id}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className={css.label}> {stat.label}</span>
            <span className={css.percentage}> {stat.percentage}%</span>
          </li>
        );
      })}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      item: PropTypes.string,
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.string,
    }).isRequired
  ).isRequired,
};
