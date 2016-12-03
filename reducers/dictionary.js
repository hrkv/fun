import { ADD_ACTION_TO_BLACK_LIST,
         REMOVE_ACTION_FROM_BLACK_LIST } from '../actions/dictionary';

const initialState = {
    aliases: {},
    blackList: {}
};

export default function dictionary(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_ACTION_TO_BLACK_LIST:
            return {
                ...state,
                blackList: {
                    ...state.blackList,
                    [payload]: true
                }
            };
        case REMOVE_ACTION_FROM_BLACK_LIST:
            return {
                ...state,
                blackList: {
                    ...state.blackList,
                    [payload]: false
                }
            };
        default:
            return state;
    }
}