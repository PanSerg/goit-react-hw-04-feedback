import { useState } from 'react';
import { Statistics } from './Statistics/statistics';
import { FeedbackOptions } from './Buttons/buttonReview';
import { Notification } from './Notification/notification';
import { Section } from './Block/blocks';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const keys = ['good', 'neutral', 'bad'];

  const handleIncrement = option => {
    console.log(option);
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  }

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    return Math.round(good / countTotalFeedback() * 100);
  }

  return (
    <>
        <Section title={'Please leave a feedback about our cafe'}>
          <FeedbackOptions onLeaveReview={handleIncrement}
            options={keys}
          />
        </Section>

        <Section title={'Statistics'}>
          {countTotalFeedback() !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>)
};