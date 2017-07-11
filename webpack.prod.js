const path = require('path');
const config = require('./webpack.dev');
const webpack = require('webpack');

module.exports = Object.assign({}, config, {
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'emojer.min.js',
    library: 'emojer',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
});