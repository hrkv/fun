import { ADD_EVENTS } from '../actions/events';

const initialState = {};

export default function events(state = initialState, action) {
    switch (action) {
        case ADD_EVENTS:
            const { id, events } = action.data;
            return {
                ...state,
                [id]: events
            };
        default:
            return state;
    }
}