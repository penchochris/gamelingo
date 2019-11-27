import { TYPES, VIEWS } from '../consts';

const initialState = {
  quizView: VIEWS.OPTIONS,
};

export const viewReducer = (state = initialState, action) => {
  const states = {
    [TYPES.SET_QUIZ_VIEW]: { ...state, quizView: action.quizView },
  };

  return states[action.type] || state;
};