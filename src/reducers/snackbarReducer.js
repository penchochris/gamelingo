import { TYPES } from '../consts';

const initialState = {
  open: false,
  variant: '',
  message: ''
};

export const snackbarReducer = (state = initialState, action) => {
  const states = {
    [TYPES.SET_SNACKBAR_OPEN]: { ...state, open: action.open},
    [TYPES.SET_SNACKBAR]: { 
      ...state,
      variant: action.variant,
      message: action.message 
    },
  };

  return states[action.type] || state;
};