import {
  FeedbackForm,
  Button,
  ButtonList,
  StatisticsList,
  StatisticsTitle,
  StatisticsItem,
} from './feedback.styled';

export const Feedback = () => {
  return (
    <FeedbackForm>
      <h2>Please leave feedback</h2>
      <ButtonList>
        <li>
          <Button>Good</Button>
        </li>
        <li>
          <Button>Neutral</Button>
        </li>
        <li>
          <Button>Bad</Button>
        </li>
      </ButtonList>
      <StatisticsTitle>Statistics</StatisticsTitle>
      <StatisticsList>
        <StatisticsItem>
          <span>Good: </span>
          <span>3</span>
        </StatisticsItem>
        <StatisticsItem>
          <span>Neutral: </span>
          <span>4</span>
        </StatisticsItem>
        <StatisticsItem>
          <span>Bad: </span>
          <span>12</span>
        </StatisticsItem>
        <StatisticsItem>
          <span>Total: </span>
          <span>12</span>
        </StatisticsItem>
        <StatisticsItem>
          <span>Positive feedback: </span>
          <span>12</span>
        </StatisticsItem>
      </StatisticsList>
    </FeedbackForm>
  );
};
