import { TYPES, DEFAULT } from '../consts';

const initialState = {
  seconds: DEFAULT.TIMER,
};

export const timerReducer = (state = initialState, action) => {
  const states = {
    [TYPES.TICK_TIMER]: { ...state, seconds: state.seconds - 1 },
    [TYPES.RESET_TIMER]: { ...state, seconds: DEFAULT.TIMER },
  };

  return states[action.type] || state;
};
