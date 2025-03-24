
// import css from './Notification.module.css';

type Message = {
    message: string
};

export const Notification = ({message}:Message) => <p>{message}</p>;

