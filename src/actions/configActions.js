import { TYPES } from '../consts';

export const newGameSaga = () => ({ type: TYPES.NEW_GAME_SAGA });
export const endGameSaga = () => ({ type: TYPES.END_GAME_SAGA });
export const nextQuizSaga = () => ({ type: TYPES.NEXT_QUIZ_SAGA });
export const selectQuizOptionSaga = quizOption => ({ type: TYPES.SELECT_QUIZ_OPTION_SAGA, quizOption });
export const startTimerSaga = () => ({ type: TYPES.START_TIMER_SAGA });
export const stopTimerSaga = () => ({ type: TYPES.STOP_TIMER_SAGA });

export const damageLifes = () => ({ type: TYPES.DAMAGE_LIFES });
export const nextQuiz = () => ({ type: TYPES.NEXT_QUIZ });
export const scoreUp = () => ({ type: TYPES.SCORE_UP });
export const resetConfig = () => ({ type: TYPES.RESET_CONFIG });
export const tickTimer = () => ({ type: TYPES.TICK_TIMER });
export const resetTimer = () => ({ type: TYPES.RESET_TIMER });