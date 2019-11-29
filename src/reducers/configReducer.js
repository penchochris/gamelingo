import { TYPES, DEFAULT } from '../consts';

const initialState = {
  totalLifes: DEFAULT.TOTAL_LIFES,
  lifes: DEFAULT.TOTAL_LIFES,
  score: 0,
  currentQuiz: 0,
  timer: DEFAULT.TIMER,
};

export const configReducer = (state = initialState, action) => {
  const states = {
    [TYPES.RESET_CONFIG]: initialState,
    [TYPES.DAMAGE_LIFES]: { ...state, lifes: state.lifes - 1 },
    [TYPES.SCORE_UP]: { ...state, score: state.score + DEFAULT.SCORE_UP },
    [TYPES.NEXT_QUIZ]: { ...state, currentQuiz: state.currentQuiz + 1 },
    [TYPES.TICK_TIMER]: { ...state, timer: state.timer - 1 },
    [TYPES.RESET_TIMER]: { ...state, timer: DEFAULT.TIMER },
  };

  return states[action.type] || state;
};