import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { FeedbackScores } from './Statistics/Statistics';

export const App = () => {
  const [state, setState] = useState<FeedbackScores>({ good: 0, neutral: 0, bad: 0 });

  const onLeaveFeedback = (option: keyof FeedbackScores) => {
    setState(prev => ({ ...prev, [option]: (prev[option] || 0) + 1 }));
  };

  const { good, neutral, bad } = state;

  const options: ("good" | "neutral" | "bad")[] = Object.keys(state) as ("good" | "neutral" | "bad")[];

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.floor((good / (good + neutral + bad)) * 100 || 0);

  return (
    <>
      <Section title="Please Leave feedback">
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} options={options} />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback yet..." />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
};


