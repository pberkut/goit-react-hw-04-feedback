import { Component } from 'react';
import { GlobalStyles } from './GlobalStyles';
import { Container } from './Container';
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};
export class App extends Component {
  state = { ...INITIAL_STATE };

  onLeaveFeedback = option => {
    this.setState(prevSate => ({
      [option]: prevSate[option] + 1,
    }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((total, value) => total + value, 0);

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0;

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Container>
        <GlobalStyles />
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </Container>
    );
  }
}
