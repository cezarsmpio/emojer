const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/assets/',
    filename: 'emojer.js',
    library: 'emojer',
    libraryTarget: 'umd'
  }
};
