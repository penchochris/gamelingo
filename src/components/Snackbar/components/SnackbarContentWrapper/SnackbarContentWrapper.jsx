import React from 'react';
import { useSelector } from 'react-redux';

import clsx from 'clsx';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { makeStyles } from '@material-ui/core/styles';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const useStyles = makeStyles(theme => ({
  success: {
    backgroundColor: 'green'
  },
  error: {
    backgroundColor: 'red',
  },
  info: {
    backgroundColor: 'blue',
  },
  warning: {
    backgroundColor: 'orange',
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const SnackbarContentWrapper = props => {
  const classes = useStyles();
  const { onClose } = props;
  const { variant, message } = useSelector(state => state.snackbar);
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={classes[variant]}
      message={
        <span className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton key="close" color="inherit" onClick={onClose}>
          <CloseIcon className={classes.icon} />
        </IconButton>
      ]}
    />
  );
};

export default SnackbarContentWrapper;