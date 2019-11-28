import { TYPES, DEFAULT } from '../consts';

const initialState = {
  totalLifes: DEFAULT.TOTAL_LIFES,
  lifes: DEFAULT.TOTAL_LIFES,
  score: 0,
  currentQuiz: 0,
};

export const configReducer = (state = initialState, action) => {
  const states = {
    [TYPES.RESET_CONFIG]: initialState,
    [TYPES.DAMAGE_LIFES]: { ...state, lifes: state.lifes - 1 },
    [TYPES.SCORE_UP]: { ...state, score: state.score + DEFAULT.SCORE_UP },
    [TYPES.NEXT_QUIZ]: { ...state, currentQuiz: state.currentQuiz + 1 },
  };

  return states[action.type] || state;
};