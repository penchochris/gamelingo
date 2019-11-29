import { TYPES } from '../consts';

export const closeSnackbar = () => ({ type: TYPES.CLOSE_SNACKBAR, open: false });

export const setSnackbar = snackbar => ({ type: TYPES.SET_SNACKBAR, ...snackbar, open: true });