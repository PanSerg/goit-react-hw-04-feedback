import React, { Component } from 'react';
import { Statistics } from './Statistics/statistics';
import { FeedbackOptions } from './Buttons/buttonReview';
import { Notification } from './Notification/notification';
import { Section } from './Block/blocks';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleIncrement = evt => {
    const handleIncr = evt.target.textContent.toLowerCase();
    this.setState(prevState => ({ [handleIncr]: prevState[handleIncr] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  };
  
  render() {
     const keys = Object.keys(this.state);
    return (
      <>
        <Section title={'Please leave a feedback about our cafe'}>
          <FeedbackOptions onLeaveReview={this.handleIncrement}
            options={keys}
          />
        </Section>

        <Section title={'Statistics'}>
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }; 
};
