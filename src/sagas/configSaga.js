import { put, takeLatest, select } from 'redux-saga/effects';

import { 
  nextQuiz,
  resetQuiz,
  scoreUp,
  resetScore,
  damageLifes,
  resetLifes,
  nextQuizSaga,
  setQuizStatus,
} from '../actions/configActions';
import { resetTimer, startTimerSaga, stopTimerSaga } from '../actions/timerActions';

import { TYPES, DEFAULT } from '../consts';

function* newGame() {
  yield put(resetLifes());
  yield put(resetQuiz());
  yield put(resetScore());
  yield put(resetTimer());
  yield put(startTimerSaga());
}

function* endGame() {
  const { config: { quizStatus } } = yield select();
  if (quizStatus === DEFAULT.IS_PLAYING) {
    yield put(setQuizStatus(DEFAULT.IS_SELECTING_OPTIONS));
  }
  yield put(stopTimerSaga());
}

function* getNextQuestion() {
  const { config, quiz } = yield select();
  const { currentQuiz, lifes } = config;

  if(currentQuiz === quiz.length - 1 || lifes === 0) {
    yield put(setQuizStatus(DEFAULT.IS_VIEWING_STATS));
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

export const configSaga = [
  takeLatest(TYPES.NEXT_QUIZ_SAGA, getNextQuestion),
  takeLatest(TYPES.SELECT_QUIZ_OPTION_SAGA, selectQuizOption),
  takeLatest(TYPES.NEW_GAME_SAGA, newGame),
  takeLatest(TYPES.END_GAME_SAGA, endGame),
];