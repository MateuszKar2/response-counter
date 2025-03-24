import css from './Statistics.module.css'

export type FeedbackScores = {
    good: number,
    neutral: number,
    bad: number,
    total?: number,
    positivePercentage?: number
}


export const Statistics = ({ good, neutral, bad, total, positivePercentage }: FeedbackScores) => {
    return (
        <ul className={css.statistics}>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>PositivePercentage: {positivePercentage}</li>
        </ul>
    );
};

