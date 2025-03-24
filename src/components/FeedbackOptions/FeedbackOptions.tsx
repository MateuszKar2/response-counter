
import { FeedbackScores } from '../Statistics/Statistics';
import css from './FeedbackOptions.module.css';
import { nanoid } from 'nanoid';


type Options = {
    onLeaveFeedback: (option: keyof FeedbackScores) => void,
    options: ('good' | 'neutral' | 'bad')[],
}

const getButtonClass = (item: 'good' | 'neutral' | 'bad'): string => {
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

    export const FeedbackOptions = ({onLeaveFeedback, options}: Options) => {
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

