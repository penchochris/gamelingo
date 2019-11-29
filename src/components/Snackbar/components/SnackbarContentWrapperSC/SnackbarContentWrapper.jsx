import React from 'react';
import { useSelector } from 'react-redux';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import WarningIcon from '@material-ui/icons/Warning';

import { StyledMessage, StyledSnackbarContent, StyledSpan } from "./StyledSnackbarComponents";

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const SnackbarContentWrapper = props => {
  const { onClose } = props;
  const { variant, message } = useSelector(state => state.snackbar);
  const Icon = variantIcon[variant];

  return (
    <StyledSnackbarContent
      background={variant}
      message={
        <StyledSpan>
          <Icon/>
          <StyledMessage>{message}</StyledMessage>
        </StyledSpan>
      }
      action={[
        <IconButton key="close" color="inherit" onClick={onClose}>
          <CloseIcon/>
        </IconButton>,
      ]}
    />
  );
};

export default SnackbarContentWrapper;