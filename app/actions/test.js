import { createAction } from 'redux-actions';

export const SET_TEST = Symbol('SET_TEST');
export const setTest = createAction(SET_TEST);