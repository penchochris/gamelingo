import { TYPES } from '../consts';

export const startTimerSaga = () => ({ type: TYPES.START_TIMER_SAGA });
export const stopTimerSaga = () => ({ type: TYPES.STOP_TIMER_SAGA });
export const tickTimer = () => ({ type: TYPES.TICK_TIMER });
export const resetTimer = () => ({ type: TYPES.RESET_TIMER });