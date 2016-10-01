export const ADD_EVENTS = Symbol('ADD_EVENTS');
export const addEvents = (payload) => ({
    type: ADD_EVENTS,
    payload
});