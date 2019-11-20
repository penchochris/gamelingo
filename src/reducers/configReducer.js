import { TYPES, DEFAULT, LANGUAGES } from '../consts';

const initialState = {
  isPlaying: true,
  totalLifes: DEFAULT.TOTAL_LIFES,
  lifes: DEFAULT.TOTAL_LIFES,
  score: 0,
  currentQuiz: 0,
  //TODO: change to ''
  langA: LANGUAGES.SPANISH,
  langB: LANGUAGES.JAPANESE_KANA,
};

export const configReducer = (state = initialState, action) => {
  const states = {
    [TYPES.DAMAGE_LIFES]: { ...state, lifes: state.lifes - 1 },
    [TYPES.RESET_LIFES]: { ...state, lifes: DEFAULT.TOTAL_LIFES },
    [TYPES.CHANGE_IS_PLAYING]: { ...state, isPlaying: !state.isPlaying },
    [TYPES.SCORE_UP]: { ...state, score: state.score + DEFAULT.SCORE_UP },
    [TYPES.NEXT_QUIZ]: { ...state, currentQuiz: state.currentQuiz + 1 },
    [TYPES.RESET_QUIZ]: { ...state, currentQuiz: 0 },
    [TYPES.SET_LANG_A]: { ...state, langA: action.langA },
    [TYPES.SET_LANG_B]: { ...state, langB: action.langB },
  };

  return states[action.type] || state;
};