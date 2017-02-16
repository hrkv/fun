var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

require.extensions['.css'] = () => {
    return;
};

module.exports = {
    entry: './client/index.js',
    output: {
        path: __dirname,
        filename: 'bundle/app.js'
    },
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.styl$/,
                loader: ExtractTextPlugin.extract("css-loader!stylus")
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("./static/styles.css")
    ]
};