import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback, field }) => {
const {optionsBtn} = styles

  return (
    <button className={optionsBtn} type="button" onClick={()=> {onLeaveFeedback(field)}}>
      {options}
    </button>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};