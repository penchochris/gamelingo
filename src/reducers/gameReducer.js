import { TYPES } from '../consts';

const initialState = {
  quiz: [{
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
  }],
};

export const gameReducer = (state = initialState, action) => {
  const states = {
    [TYPES.SET_QUIZ]: { ...state, quiz: action.quiz },
  };

  return states[action.type] || state;
};