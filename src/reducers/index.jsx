import { combineReducers } from 'redux';

import { gameReducer } from './gameReducer';
import { configReducer } from './configReducer';
import { timerReducer } from './timerReducer';

const reducers = combineReducers({
  game: gameReducer,
  config: configReducer,
  timer: timerReducer,
});

export default reducers;