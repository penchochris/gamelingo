import { put, takeLatest, select } from 'redux-saga/effects';

import { 
  changeIsPlaying,
  nextQuiz,
  resetQuiz,
  scoreUp,
  resetScore,
  damageLifes,
  resetLifes,
  nextQuizSaga,
} from '../actions/configActions';
import { resetTimer, startTimerSaga, stopTimerSaga } from '../actions/timerActions';

import { TYPES } from '../consts';

function* newGame() {
  yield put(resetLifes());
  yield put(resetQuiz());
  yield put(resetScore());
  yield put(resetTimer());
  yield put(startTimerSaga());
}

function* endGame() {
  yield put(stopTimerSaga());
}

function* getNextQuestion() {
  const { config, game } = yield select();
  const { currentQuiz, lifes } = config;
  const { quiz } = game;

  if(currentQuiz === quiz.length - 1 || lifes === 0) {
    yield put(changeIsPlaying());
  } else {
    yield put(nextQuiz());
    yield put(resetTimer());
  }
}

function* selectQuizOption(action) {
  const { quizOption } = action;
  const { game, config } = yield select();
  const { currentQuiz } = config;


  if (game.quiz[currentQuiz].langB === quizOption) {
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