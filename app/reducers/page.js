import { SET_PAGE } from '../actions/page';
import { NEW_TEST } from '../constants/page';

const initialState = {
    current: NEW_TEST
};

export default function events(state = initialState, { type, payload }) {
    switch (type) {
        case SET_PAGE:
            return {
                ...state,
                current: payload
            };
        default:
            return state;
    }
}