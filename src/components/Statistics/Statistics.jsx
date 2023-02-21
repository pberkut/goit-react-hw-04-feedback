import PropTypes from 'prop-types';
import {
  StatisticsItem,
  StatisticsList,
  StatisticsTitle,
} from './Statistics.styled';

import { Notification } from '../Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <StatisticsTitle>Statistics</StatisticsTitle>
      {total ? (
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
            <span>{total}</span>
          </StatisticsItem>
          <StatisticsItem>
            <span>Positive feedback: </span>
            <span>{positivePercentage}%</span>
          </StatisticsItem>
        </StatisticsList>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
