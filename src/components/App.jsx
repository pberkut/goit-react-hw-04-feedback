import { useState } from 'react';
import { GlobalStyles } from './GlobalStyles';
import { Container } from './Container';
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(s => s + 1);
        break;
      case 'neutral':
        setNeutral(s => s + 1);
        break;
      case 'bad':
        setBad(s => s + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.round((good / countTotalFeedback()) * 100) || 0;

  return (
    <Container>
      <GlobalStyles />
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </Container>
  );
};

//  const INITIAL_STATE = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
// };
// export class App extends Component {
//   state = { ...INITIAL_STATE };

// onLeaveFeedback = option => {
//   this.setState(prevSate => ({
//     [option]: prevSate[option] + 1,
//   }));
// };

// countTotalFeedback = () =>
//   Object.values(this.state).reduce((total, value) => total + value, 0);

// countPositiveFeedbackPercentage = () =>
//   Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0;

//   render() {
//     const { good, neutral, bad } = this.state;

//   return (
//     <Container>
//       <GlobalStyles />
//       <Section title="Please leave feedback">
//         <FeedbackOptions
//           options={this.state}
//           onLeaveFeedback={this.onLeaveFeedback}
//         />
//       </Section>

//       <Section>
//         <Statistics
//           good={good}
//           neutral={neutral}
//           bad={bad}
//           total={this.countTotalFeedback()}
//           positivePercentage={this.countPositiveFeedbackPercentage()}
//         />
//       </Section>
//     </Container>
//   );
// }
// }
