import PropTypes from 'prop-types';
import { NotificationStyled } from './Notification.styled';

export const Notification = ({ message }) => {
  return <NotificationStyled>{message}</NotificationStyled>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
