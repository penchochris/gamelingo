import { put, takeLatest, delay, take, fork, cancel } from 'redux-saga/effects';
import { tickTimer } from '../actions/timerActions';
import { TYPES } from '../consts';

function* timer() {
  while(true) {
    yield delay(1000);
    yield put(tickTimer());
  }
}

function* startTimerSaga() {
    const timerTask = yield fork(timer)
    yield take(TYPES.STOP_TIMER_SAGA);
    yield cancel(timerTask)
}

export const timerSaga = [
  takeLatest(TYPES.START_TIMER_SAGA, startTimerSaga),
];