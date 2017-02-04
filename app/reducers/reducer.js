import { combineReducers } from 'redux';

import test from './test';
import page from './page';
import language from './language';

export default combineReducers({
    page,
    test,
    language
});