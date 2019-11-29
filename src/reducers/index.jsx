import { combineReducers } from 'redux';

import { quizReducer } from './quizReducer';
import { configReducer } from './configReducer';
import { viewReducer } from './viewReducer';
import { snackbarReducer } from './snackbarReducer';

const reducers = combineReducers({
  quiz: quizReducer,
  config: configReducer,
  view: viewReducer,
  snackbar: snackbarReducer,
});

export default reducers;