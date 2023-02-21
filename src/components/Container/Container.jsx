import PropTypes from 'prop-types';
import { ContainerStyled } from './Container.styles';

export const Container = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
