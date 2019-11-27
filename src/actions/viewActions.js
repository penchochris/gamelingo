import { TYPES } from '../consts';

export const setQuizView = quizView => ({ type: TYPES.SET_QUIZ_VIEW, quizView });
export const handleUnmount = from => ({ type: TYPES.HANDLE_UNMOUNT, from });
