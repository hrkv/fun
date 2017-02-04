import { handleActions } from 'redux-actions';

import { RU } from '../constants/langs';
import { SET_LANGUAGE } from '../actions/language';

export default handleActions({
    [SET_LANGUAGE]: (state, { payload }) => payload
}, RU)