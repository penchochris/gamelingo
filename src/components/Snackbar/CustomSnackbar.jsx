import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeSnackbar } from '../../../actions/snackbarActions';

import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContentWrapper from './components/SnackbarContentWrapperSC/SnackbarContentWrapper';

const CustomSnackbar = () => {
  const { open } = useSelector(state => state.snackbar);
  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    open && dispatch(closeSnackbar());
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={open}
      autoHideDuration={4000}
      onClose={handleClose}
    >
      <SnackbarContentWrapper
        onClose={handleClose}
      />
    </Snackbar>
  );
};

export default CustomSnackbar;