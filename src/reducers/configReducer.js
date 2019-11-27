import { TYPES, DEFAULT } from '../consts';

const initialState = {
  totalLifes: DEFAULT.TOTAL_LIFES,
  lifes: DEFAULT.TOTAL_LIFES,
  score: 0,
  currentQuiz: 0,
  langA: '',
  langB: '',
};

export const configReducer = (state = initialState, action) => {
  const states = {
    [TYPES.DAMAGE_LIFES]: { ...state, lifes: state.lifes - 1 },
    [TYPES.RESET_LIFES]: { ...state, lifes: DEFAULT.TOTAL_LIFES },
    [TYPES.SCORE_UP]: { ...state, score: state.score + DEFAULT.SCORE_UP },
    [TYPES.RESET_SCORE]: { ...state, score: 0 },
    [TYPES.NEXT_QUIZ]: { ...state, currentQuiz: state.currentQuiz + 1 },
    [TYPES.RESET_QUIZ]: { ...state, currentQuiz: 0 },
    [TYPES.SET_LANG_A]: { ...state, langA: action.langA },
    [TYPES.SET_LANG_B]: { ...state, langB: action.langB },
  };

  return states[action.type] || state;
};