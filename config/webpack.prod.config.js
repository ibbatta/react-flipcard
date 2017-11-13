const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPlugin = require('webpack');
const pathConfig = require('./path.config');

module.exports = {
  context: pathConfig.CONTEXT,
  devtool: 'none',
  entry: {
    app: [pathConfig.INDEX_JS],
  },
  output: {
    // publicPath: pathConfig.DIST,
    path: pathConfig.DIST,
  },
  plugins: [
    new WebpackPlugin.optimize.OccurrenceOrderPlugin(),
    new MinifyPlugin({
      removeConsole: true,
      removeDebugger: true,
    }),
    new UglifyJSPlugin({
      sourceMap: true,
    }),
    new PurifyCSSPlugin({
      styleExtensions: ['.css', '.scss'],
      moduleExtensions: ['.html'],
      purifyOptions: {
        info: true,
        rejected: false,
        minify: true,
      },
      paths: [pathConfig.INDEX_HTML],
    }),
    new HtmlWebpackPlugin({
      template: pathConfig.INDEX_HTML,
      inject: true,
      cache: false,
      filename: '../dist/index.html',
    }),
    new WebpackPlugin.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
  ],
};
