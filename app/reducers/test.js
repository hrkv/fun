import { handleActions } from 'redux-actions';
import { SET_TEST,
         SAVE_DRAFT,
         UPDATE_DRAFT } from '../actions/test';

export default handleActions({
    [SET_TEST]: (state, { payload }) => payload,
    [SAVE_DRAFT]: (state) => ({
        ...state,
        questions: [
            ...state.questions,
            state.draft
        ]
    }),
    [UPDATE_DRAFT]: (state, { payload }) => ({
        ...state,
        draft: payload
    })
}, {
    questions: [],
    draft: {}
});