const webpack = require('webpack'); //to access built-in plugins
const path = require('path')
require('dotenv').config()

module.exports = {
    resolve: {
        fallback: {
            "path": false,
            "os": false,
            "crypto": false
        },
    },
    mode: 'development',
    entry: {
        // test: './src/test.js',
        index: './src/index.js',
        admin: './src/admin.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public/js'),
    },
    plugins: [
        new webpack.EnvironmentPlugin(['DEVELOPMENT_ENV', 'GOOGLE_API_KEY_PROD', 'GOOGLE_API_KEY_DEV'])
    ],
};