import { createAction } from 'redux-actions';

export const SET_LANGUAGE = Symbol('SET_LANGUAGE');
export const setLanguage = createAction(SET_LANGUAGE);