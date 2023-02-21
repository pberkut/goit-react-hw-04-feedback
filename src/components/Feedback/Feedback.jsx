import { Component } from 'react';

import {
  FeedbackForm,
  Button,
  ButtonList,
  StatisticsList,
  StatisticsTitle,
  StatisticsItem,
} from './feedback.styled';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleCountFeedback = feedbackType => {
    this.setState(prevSate => ({
      [feedbackType]: prevSate[feedbackType] + 1,
    }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((total, value) => total + value, 0);

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0;

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <FeedbackForm>
        <h2>Please leave feedback</h2>
        <ButtonList>
          <li>
            <Button
              onClick={() => {
                this.handleCountFeedback('good');
              }}
            >
              Good
            </Button>
          </li>
          <li>
            <Button
              onClick={() => {
                this.handleCountFeedback('neutral');
              }}
            >
              Neutral
            </Button>
          </li>
          <li>
            <Button
              onClick={() => {
                this.handleCountFeedback('bad');
              }}
            >
              Bad
            </Button>
          </li>
        </ButtonList>
        <StatisticsTitle>Statistics</StatisticsTitle>
        <StatisticsList>
          <StatisticsItem>
            <span>Good: </span>
            <span>{good}</span>
          </StatisticsItem>
          <StatisticsItem>
            <span>Neutral: </span>
            <span>{neutral}</span>
          </StatisticsItem>
          <StatisticsItem>
            <span>Bad: </span>
            <span>{bad}</span>
          </StatisticsItem>
          <hr />
          <StatisticsItem>
            <span>Total: </span>
            <span>{this.countTotalFeedback()}</span>
          </StatisticsItem>
          <StatisticsItem>
            <span>Positive feedback: </span>
            <span>{this.countPositiveFeedbackPercentage()}%</span>
          </StatisticsItem>
        </StatisticsList>
      </FeedbackForm>
    );
  }
}
