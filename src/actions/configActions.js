import { TYPES } from '../consts';

export const newGameSaga = () => ({ type: TYPES.NEW_GAME_SAGA });
export const endGameSaga = () => ({ type: TYPES.END_GAME_SAGA });

export const damageLifes = () => ({ type: TYPES.DAMAGE_LIFES });
export const resetLifes = () => ({ type: TYPES.RESET_LIFES });

export const setQuizStatus = quizStatus => ({ type: TYPES.SET_QUIZ_STATUS, quizStatus });

export const nextQuiz = () => ({ type: TYPES.NEXT_QUIZ });
export const resetQuiz = () => ({ type: TYPES.RESET_QUIZ });

export const scoreUp = () => ({ type: TYPES.SCORE_UP });
export const resetScore = () => ({ type: TYPES.RESET_SCORE });

export const setLangA = LangA => ({ type: TYPES.SET_LANG_A, LangA })
export const setLangB = LangB => ({ type: TYPES.SET_LANG_B, LangB })

export const nextQuizSaga = () => ({ type: TYPES.NEXT_QUIZ_SAGA });
export const selectQuizOptionSaga = quizOption => ({ type: TYPES.SELECT_QUIZ_OPTION_SAGA, quizOption });
