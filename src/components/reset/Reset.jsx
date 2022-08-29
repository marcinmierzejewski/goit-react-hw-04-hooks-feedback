import PropTypes from 'prop-types';
import styles from './Reset.module.css';

export const Reset = ({ name, func }) => {
const {resetBtn} = styles

  return (
    <button className={resetBtn} type="button" onClick={func}>
      {name}
    </button>
  );
};

Reset.propTypes = {
  name: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};