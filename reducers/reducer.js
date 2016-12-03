import { combineReducers } from 'redux';
import dictionary from './dictionary';
import history from './history';
import page from './page';

export default combineReducers({
    dictionary,
    history,
    page
});