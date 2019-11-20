import { select, put, takeLatest, delay, take, fork, cancel } from 'redux-saga/effects';
import { tickTimer } from '../actions/timerActions';
import { nextQuizSaga } from '../actions/configActions';
import { TYPES } from '../consts';

function* timer() {
  while(true) {
    yield delay(1000);
    yield put(tickTimer());
    const { timer } = yield select();
    if(timer.seconds === 0) {
      yield put(nextQuizSaga());
    }
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