import { TYPES } from '../consts';

export const closeSnackbar = () => ({ type: TYPES.OPEN_SNACKBAR, open: false });
export const openSnackbar = snackbar => ({ type: TYPES.CLOSE_SNACKBAR, snackbar, open: true });