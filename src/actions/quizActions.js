import { TYPES } from '../consts';

export const setQuiz = quiz => ({ type: TYPES.SET_QUIZ, quiz });
export const fetchQuizSaga = values => ({ type: TYPES.FETCH_QUIZ_SAGA, values });