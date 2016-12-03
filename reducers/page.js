import { SET_PAGE } from '../actions/page';
import { HISTORY } from '../constants/page';

const initialState = {
    current: HISTORY
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