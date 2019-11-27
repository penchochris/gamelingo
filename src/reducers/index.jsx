import { combineReducers } from 'redux';

import { quizReducer } from './quizReducer';
import { configReducer } from './configReducer';
import { timerReducer } from './timerReducer';
import { viewReducer } from './viewReducer';

const reducers = combineReducers({
  quiz: quizReducer,
  config: configReducer,
  timer: timerReducer,
  view: viewReducer,
});

export default reducers;