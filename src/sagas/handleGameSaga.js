import { put, takeLatest, select, delay, fork, take, cancel, call } from 'redux-saga/effects';

import { 
  nextQuiz,
  resetQuiz,
  scoreUp,
  resetScore,
  damageLifes,
  resetLifes,
  nextQuizSaga,
} from '../actions/configActions';
import { setQuizView } from '../actions/viewActions';
import { setQuiz } from '../actions/quizActions';
import { resetTimer, startTimerSaga, tickTimer } from '../actions/timerActions';

import { TYPES, VIEWS } from '../consts';

function* newGame() {
  yield put(resetLifes());
  yield put(resetQuiz());
  yield put(resetScore());
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
    //yield put(resetTimer());
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
  //TODO: get with category and languages
  //const { values: { category, langA, langB } } = action;

  //TODO: catch to Snackbar
  const api = url => 
    fetch(url)
      .then(res => res.json())
      .catch(err => {
        console.log('To snackbar');
      });

  const quiz = yield call(api, 'http://localhost:5000/quiz');

  if (!quiz) return;

  if (quiz.length > 0) {
    yield put(setQuiz(quiz));
    yield put(setQuizView(VIEWS.PLAY));
  } else {
    //TODO: Message 'Quiz not found' to Snackbar
  }
}

function* timer() {
  while(true) {
    yield delay(1000);
    yield put(tickTimer());
    const { timer } = yield select();
    if(timer.seconds === 0) {
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