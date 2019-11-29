import { put, takeLatest, select, delay, fork, take, cancel, call } from 'redux-saga/effects';

import { 
  nextQuiz,
  scoreUp,
  damageLifes,
  nextQuizSaga,
  resetConfig,
  resetTimer,
  startTimerSaga,
  tickTimer,
} from '../actions/configActions';
import { setSnackbar } from '../actions/snackbarActions'
import { setQuizView } from '../actions/viewActions';
import { setQuiz } from '../actions/quizActions';

import { TYPES, VIEWS, SNACKBARS } from '../consts';
import axios from 'axios';

function* newGame() {
  yield put(resetConfig());
  yield put(resetTimer());
  yield put(startTimerSaga());
}

function* getNextQuestion() {
  const { config, quiz } = yield select();
  const { currentQuiz, lifes } = config;

  if(currentQuiz === quiz.length - 1 || lifes === 0) {
    yield put(setQuizView(VIEWS.STATS));
  } else {
    yield put(nextQuiz());
    yield put(resetTimer());
  }
}

function* selectQuizOption(action) {
  const { quizOption } = action;
  const { quiz, config } = yield select();
  const { currentQuiz } = config;

  if (quiz[currentQuiz].langB === quizOption) {
    yield put(scoreUp())
  } else {
    yield put(damageLifes())
  }

  yield put(nextQuizSaga());
}

function* fetchQuiz(action) {
  const { values } = action;

  //TODO: url partially to environments vars
  const apiCall = () => 
    axios.post('http://localhost:5000/quiz', values)
      .then(response => ({ quiz: response.data }))
      .catch(err => ({ error: err}));

  const { quiz, error } = yield call(apiCall);
  
  if (error) {
    yield put(setSnackbar(SNACKBARS.GAME_ERROR));
    return;
  }

  if (quiz.length > 0) {
    yield put(setQuiz(quiz));
    yield put(setQuizView(VIEWS.PLAY));
  } else {
    yield put(setSnackbar(SNACKBARS.GAME_NOT_FOUND))
  }
}

function* timer() {
  while(true) {
    yield delay(1000);
    yield put(tickTimer());
    const { config: { timer } } = yield select();
    if(timer === 0) {
      yield put(nextQuizSaga());
    }
  }
}

function* startTimer() {
    const timerTask = yield fork(timer)
    yield take(TYPES.STOP_TIMER_SAGA);
    yield cancel(timerTask)
}

export const handleGameSaga = [
  takeLatest(TYPES.NEXT_QUIZ_SAGA, getNextQuestion),
  takeLatest(TYPES.SELECT_QUIZ_OPTION_SAGA, selectQuizOption),
  takeLatest(TYPES.NEW_GAME_SAGA, newGame),
  takeLatest(TYPES.FETCH_QUIZ_SAGA, fetchQuiz),
  takeLatest(TYPES.START_TIMER_SAGA, startTimer),
];