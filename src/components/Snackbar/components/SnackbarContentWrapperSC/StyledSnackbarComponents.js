import styled from 'styled-components';
import SnackbarContent from '@material-ui/core/SnackbarContent';

const backgroundColors = {
  success: 'green',
  error: 'red',
  info: 'blue',
  warning: 'orange',
};

export const StyledSnackbarContent = styled(SnackbarContent)`
  && {
    background: ${props => (backgroundColors[props.background])};
  }
`;

export const StyledSpan = styled.span`
  display: flex;
  align-items: center;
`;

export const StyledMessage = styled.span`
  padding-left: 10px
  font-weight: bold;
`;