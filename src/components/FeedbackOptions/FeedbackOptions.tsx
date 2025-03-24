import  PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
import { nanoid } from 'nanoid';
       
const getButtonClass = (item) => {
    switch(item) {
        case 'good':
            return css.btnGood;
        case 'neutral':
            return  css.btnNeytral;
        case 'bad':
            return css.btnBad;
            default:
                return '';
    }
};

    export const FeedbackOptions = ({onLeaveFeedback, options}) => {
            return (
                <ul className={css.buttonsFeedback}>
                    {options.map((option) => (
                        <li key={nanoid()}>
                            <button className={`${css.btn} ${getButtonClass(option)}`} type="button" onClick={() => onLeaveFeedback(option)}>{option}</button>
                        </li>
                    ))}
                </ul>
            );
        };



FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.oneOf(['good','neutral','bad'])).isRequired,
};