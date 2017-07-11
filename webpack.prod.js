const config = require('./webpack.dev');
const webpack = require('webpack');

module.exports = Object.assign({}, config, {
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
});