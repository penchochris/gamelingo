import { put, takeLatest } from 'redux-saga/effects';
import { setQuiz } from '../actions/quizActions';
import { TYPES } from '../consts';

const animals = [{
    langA: 'Gato',
    langB: 'ねこ',
    options: ['ねこ', 'オオカミ', 'カバ', 'トラ']
  },
  {
    langA: 'Perro',
    langB: 'いぬ',
    options: ['オオカミ', 'ねこ', 'いぬ', 'トラ']
  },
  {
    langA: 'Lobo',
    langB: 'オオカミ',
    options: ['オオカミ', 'ねこ', 'いぬ', 'トラ']
  },
  {
    langA: 'Panda',
    langB: 'パンダ',
    options: ['オオカミ', 'パンダ', 'いぬ', 'トラ']
  }];

  const colors = [{
    langA: 'Naranja',
    langB: 'オレンジ',
    options: ['あか', 'あお', 'みどり', 'オレンジ']
  },
  {
    langA: 'Azul',
    langB: 'あお',
    options: ['あか', 'あお', 'みどり', 'オレンジ']
  },
  {
    langA: 'Rojo',
    langB: 'あか',
    options: ['あか', 'あお', 'みどり', 'オレンジ']
  },
  {
    langA: 'Verde',
    langB: 'みどり',
    options: ['あか', 'あお', 'みどり', 'オレンジ']
  }];

function* fetchQuiz(action) {
  //TODO: Fetch from backend
  const { values: { category } } = action;

  const mockedFetch = {
    animals: setQuiz(animals),
    colors: setQuiz(colors),
  }
  
  yield put(mockedFetch[category]);
  
}

export const quizSaga = [
  takeLatest(TYPES.FETCH_QUIZ_SAGA, fetchQuiz),
];