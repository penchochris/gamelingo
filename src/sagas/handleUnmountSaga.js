import { select, put, takeLatest } from 'redux-saga/effects';
import { setQuizView } from '../actions/viewActions';

import { TYPES, VIEWS } from '../consts';

function* handleUnmount(action) {
  const { view: { quizView } } = yield select();
  const { from } = action;

  if ( from === VIEWS.PLAY && quizView === VIEWS.PLAY) {
    yield put(setQuizView(VIEWS.OPTIONS))
  }

  if ( from === VIEWS.STATS && quizView === VIEWS.STATS) {
    yield put(setQuizView(VIEWS.OPTIONS))
  }
}

export const handleUnmountSaga = [
  takeLatest(TYPES.HANDLE_UNMOUNT, handleUnmount),
];