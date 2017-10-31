const path = require('path');

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
};

module.exports = {
  context: path.resolve(__dirname, paths.SRC),
  entry: {
    app: ['./index.jsx'],
  },
  output: {
    path: paths.DIST,
    filename: '[name].bundle.js',
  },
  devServer: {
    contentBase: paths.SRC,
  },
  module: {},
};
