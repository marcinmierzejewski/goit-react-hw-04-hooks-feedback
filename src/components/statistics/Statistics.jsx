import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export const Statistic = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  const {statisticValue, totalWrapper} = styles

  return (
    <div>
      <p className={statisticValue}>Good: {good}</p>
      <p className={statisticValue}>Neutral: {neutral}</p>
      <p className={statisticValue}>Bad: {bad}</p>
      <div className={totalWrapper}>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage}%</p>
      </div>      
    </div>
  );
};

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};