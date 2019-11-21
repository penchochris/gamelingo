import { combineReducers } from 'redux';

import { quizReducer } from './quizReducer';
import { configReducer } from './configReducer';
import { timerReducer } from './timerReducer';

const reducers = combineReducers({
  quiz: quizReducer,
  config: configReducer,
  timer: timerReducer,
});

export default reducers;