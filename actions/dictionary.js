export const ADD_ACTION_TO_BLACK_LIST = Symbol('ADD_ACTION_TO_BLACK_LIST');
export const addActionToBlackList = (payload) => ({
    type: ADD_ACTION_TO_BLACK_LIST,
    payload
});

export const REMOVE_ACTION_FROM_BLACK_LIST = Symbol('REMOVE_ACTION_FROM_BLACK_LIST');
export const removeActionFromBlackList = (payload) => ({
    type: REMOVE_ACTION_FROM_BLACK_LIST,
    payload
});