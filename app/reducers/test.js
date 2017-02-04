import { handleActions } from 'redux-actions';
import { SET_TEST } from '../actions/test';

export default handleActions({
    [SET_TEST]: (state, { payload }) => payload
}, null)