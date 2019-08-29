const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const Dotenv = require('dotenv-webpack');


const config = {

    // tell webpack the root file of our server application
    entry: './src/client/client.js',

    // tell webpack where to output the bundle to
    // we want it to be 'public' so it is publicly 
    // available...
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    plugins: [new Dotenv()]
}

module.exports = merge(baseConfig, config);