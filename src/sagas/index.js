import { all } from 'redux-saga/effects';

import { handleGameSaga } from './handleGameSaga';
import { handleUnmountSaga } from './handleUnmountSaga';

function* sagas () {
  yield all([
    ...handleGameSaga,
    ...handleUnmountSaga,
  ]);
}

export default sagas;