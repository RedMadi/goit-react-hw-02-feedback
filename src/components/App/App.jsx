import React, { Component } from 'react';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';
export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleFeedback = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  feedbackTotal = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  feedbackPositivePercentage = () => {
    const totalFeedbackValue = this.feedbackTotal();
    return totalFeedbackValue === 0
      ? 0
      : ((this.state.good / totalFeedbackValue) * 100).toFixed(0);
  };

  render() {
    const options = ['good', 'neutral', 'bad'];
    const totalFeedbackValue = this.feedbackTotal();
    const positivePercentageValue = this.feedbackPositivePercentage();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {totalFeedbackValue === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalFeedbackValue}
              percentage={positivePercentageValue}
            />
          )}
        </Section>
      </>
    );
  }
}
