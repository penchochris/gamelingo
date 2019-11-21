import { all } from 'redux-saga/effects';
import { configSaga } from './configSaga';
import { timerSaga } from './timerSaga';
import { quizSaga } from './quizSaga';

function* sagas () {
  yield all([
    ...timerSaga,
    ...configSaga,
    ...quizSaga,
  ]);
}

export default sagas;