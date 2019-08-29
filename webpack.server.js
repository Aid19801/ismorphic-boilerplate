const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');
const Dotenv = require('dotenv-webpack');

const config = {
    // we need to tell webpack that this bundle is for NodeJS rather than web.
    target: 'node',

    // tell webpack the root file of our server application
    entry: './src/index.js',

    // tell webpack where to output the bundle to
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    plugins: [new Dotenv()],
    externals: [webpackNodeExternals()],
}

module.exports = merge(baseConfig, config);