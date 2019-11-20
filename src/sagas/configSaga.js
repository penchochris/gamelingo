import { put, takeLatest, select } from 'redux-saga/effects';

import { 
  changeIsPlaying,
  nextQuiz,
  scoreUp,
  damageLifes,
  nextQuizSaga,
  resetLifes,
  resetQuiz,
} from '../actions/configActions';
import { resetTimer } from '../actions/timerActions';

import { TYPES } from '../consts';

function* getNextQuestion() {
  const { config, game } = yield select();
  const { currentQuiz, lifes } = config;
  const { quiz } = game;

  if(currentQuiz === quiz.length - 1 || lifes === 0) {
    yield put(changeIsPlaying());
    yield put(resetLifes());
    yield put(resetQuiz())
    yield put(resetTimer());
  } else {
    yield put(nextQuiz())
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
];