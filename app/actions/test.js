import { createAction } from 'redux-actions';

export const SET_TEST = Symbol('SET_TEST');
export const setTest = createAction(SET_TEST);

export const UPDATE_DRAFT = Symbol('UPDATE_DRAFT');
export const updateDraft = createAction(UPDATE_DRAFT);

export const SAVE_DRAFT = Symbol('SAVE_DRAFT');
export const saveDraft = createAction(SAVE_DRAFT);