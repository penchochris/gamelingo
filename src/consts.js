export const TYPES = {
  //QUIZ:
  SET_QUIZ: 'SET_QUIZ',
  FETCH_QUIZ_SAGA: 'FETCH_QUIZ_SAGA',

  //CONFIG:
  NEW_GAME_SAGA: 'NEW_GAME_SAGA',
  END_GAME_SAGA: 'END_GAME_SAGA',
  SELECT_QUIZ_OPTION_SAGA: 'SELECT_QUIZ_OPTION_SAGA',
  NEXT_QUIZ_SAGA: 'NEXT_QUIZ_SAGA',

  DAMAGE_LIFES: 'DAMAGE_LIFES',
  SCORE_UP: 'SCORE_UP',
  RESET_CONFIG: 'RESET_CONFIG',
  NEXT_QUIZ: 'NEXT_QUIZ',
  
  //TIMER:
  START_TIMER_SAGA: 'START_TIMER_SAGA',
  STOP_TIMER_SAGA: 'STOP_TIMER_SAGA',

  TICK_TIMER: 'TICK_TIMER',
  RESET_TIMER: 'RESET_TIMER',

  //VIEW:
  SET_QUIZ_VIEW: 'SET_QUIZ_VIEW',
  HANDLE_UNMOUNT: 'HANDLE_UNMOUNT',

  //SNACKBAR:
  SET_SNACKBAR: 'SET_SNACKBAR',
  CLOSE_SNACKBAR: 'CLOSE_SNACKBAR',
};

export const DEFAULT = {
  TIMER: 10,
  TOTAL_LIFES: 3,
  SCORE_UP: 15,
}

export const VIEWS = {
  OPTIONS: 'OPTIONS',
  PLAY: 'PLAY',
  STATS: 'STATS',
}

export const LANGUAGES = {
  SPANISH: 'spanish',
  ENGLISH: 'english',
  JAPANESE_KANA: 'japaneseKana',
  JAPANESE_KANJI: 'japaneseKanji',
  JAPANESE_ROMAJI: 'japaneseRomaji',
}

export const VARIANTS = {
  ERROR: 'error',
  INFO: 'info',
  WARNING: 'warning',
  SUCCESS: 'success',
}


//TODO: i18n
export const SNACKBARS = {
  GAME_ERROR: { 
    variant: VARIANTS.ERROR,
    message: 'Error preparando el juego.' 
  },
  GAME_NOT_FOUND: { 
    variant: VARIANTS.WARNING,
    message: 'No existen juegos con estos criterios.' 
  },
};