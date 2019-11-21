import { TYPES } from '../consts';

const initialState = [];

export const quizReducer = (state = initialState, action) => {
  const states = {
    [TYPES.SET_QUIZ]: action.quiz,
  };

  return states[action.type] || state;
};