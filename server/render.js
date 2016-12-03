"use strict";

import React from 'react';
import path from 'path';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import reducer from '../reducers/reducer';

import App from '../containers/App/App';
import { Provider } from 'react-redux';

function renderPage(html, state) {
    return `
        <!doctype html>
        <html>
            <head>
                <title>Redux Universal Example</title>
                <link rel="stylesheet" href="/static/styles.css"/>
            </head>
            <body>
                <div id="app">${html}</div>
                <script>window.__APP_STATE__ = ${JSON.stringify(state)}</script>
                <script type="text/javascript" src="/static/app.js"></script>
            </body>
        </html>
    `;
}

export default function renderApp(req, res) {
    const store = createStore(reducer);
    const html = renderToString(
        <Provider store={store}>
            <App />
        </Provider>
    );
    res.send(renderPage(html, store.getState()));
}
