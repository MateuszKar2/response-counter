import PropTypes from 'prop-types';
// import css from './Notification.module.css';

export const Notification = ({message}) => <p>{message}</p>;

Notification.protoTypes = {
    message: PropTypes.string.isRequired
}
