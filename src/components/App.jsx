import { Feedback } from './Feedback';
import { GlobalStyles } from './GlobalStyles';
import { Wrapper } from './Wrapper/Wrapper';

export const App = () => {
  return (
    <Wrapper>
      <GlobalStyles />
      <Feedback />
    </Wrapper>
  );
};
