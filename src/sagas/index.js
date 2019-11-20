import { all } from 'redux-saga/effects';
import { configSaga } from './configSaga';
import { timerSaga } from './timerSaga';

function* sagas () {
  yield all([
    ...timerSaga,
    ...configSaga
  ]);
}

export default sagas;