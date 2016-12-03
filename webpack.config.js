var path = require('path');
var webpack = require('webpack');

require.extensions['.css'] = () => {
    return;
};

module.exports = {
    entry: './client/index.js',
    output: { path: __dirname, filename: 'static/app.js' },
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};