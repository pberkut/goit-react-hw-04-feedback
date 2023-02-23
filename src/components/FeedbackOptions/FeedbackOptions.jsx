import PropTypes from 'prop-types';
import { Button, ButtonList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const labels = Object.keys(options);
  return (
    <>
      <ButtonList>
        {labels.map(button => (
          <li key={button}>
            <Button onClick={() => onLeaveFeedback(button)}>{button}</Button>
          </li>
        ))}
      </ButtonList>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
