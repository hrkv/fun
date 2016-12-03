import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from '../containers/App/App';
import reducer from '../reducers/reducer';

const store = createStore(reducer, window.__APP_STATE__);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);