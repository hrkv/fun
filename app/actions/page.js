import { createAction } from 'redux-actions';

export const SET_PAGE = Symbol('SET_PAGE');
export const setPage = createAction(SET_PAGE);