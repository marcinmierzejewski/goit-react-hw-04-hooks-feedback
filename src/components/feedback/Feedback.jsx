import React, { useEffect, useState } from 'react';
import styles from './Feedback.module.css';

import { Statistic } from 'components/statistics/Statistics';
import { FeedbackOptions } from 'components/feedbackOptions/FeedbackOptions';
import { Section } from 'components/section/Section';
import { Notification } from 'components/notification/Notification';
import { Reset } from 'components/reset/Reset';

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  useEffect(() => {}, [good, neutral, bad]);

  const countTotalFeedback = () => 
    (good + neutral + bad);  

  const countPositiveFeedbackPercentage = () =>
    (good / countTotalFeedback()) * 100;

  const resetState = () => {
    console.log('Reset...');
    setGood(good - good);
    setNeutral(neutral - neutral);
    setBad(bad - bad);
  };

  const { feedback, btnWrapper } = styles;

  return (
    <div className={feedback}>
      <Section title="Please leave feedback">
        <div className={btnWrapper}>
          <FeedbackOptions
            options="Good"
            onLeaveFeedback={() => setGood(good + 1)}
            field="good"
          />
          <FeedbackOptions
            options="Neutral"
            onLeaveFeedback={() => setNeutral(neutral + 1)}
            field="neutral"
          />
          <FeedbackOptions
            options="Bad"
            onLeaveFeedback={() => setBad(bad + 1)}
            field="nad"
          />
        </div>
      </Section>

      <Section title="Statistic">
        {good || neutral || bad > 0 ? (
          <>
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage().toFixed()}
            />
            <Reset name="Reset feedback" func={resetState} />
          </>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </div>
  );
};
