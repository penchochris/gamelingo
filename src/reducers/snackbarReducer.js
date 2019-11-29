import { TYPES } from '../consts';

const initialState = {
  open: false,
  variant: '',
  message: ''
};

export const snackbarReducer = (state = initialState, action) => {
  const states = {
    [TYPES.CLOSE_SNACKBAR]: { ...state, open: action.open},
    [TYPES.SET_SNACKBAR]: { 
      open: action.open,
      variant: action.variant,
      message: action.message 
    },
  };

  return states[action.type] || state;
};