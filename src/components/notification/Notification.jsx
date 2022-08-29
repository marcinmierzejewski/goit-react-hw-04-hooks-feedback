import PropTypes from 'prop-types';
import styles from './Notification.module.css';

export const Notification = ({message}) => {
  const {notify} = styles

  return (
    <div className={notify}>{message}</div>
  )
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};