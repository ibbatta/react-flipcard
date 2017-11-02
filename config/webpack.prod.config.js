const glob = require('glob');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const WebpackPlugin = require('webpack');
const pathConfig = require('./path.config');

const minifyOpts = {
  removeConsole: true,
  removeDebugger: true,
};

const pluginOpts = {};

module.exports = {
  context: pathConfig.CONTEXT,
  devtool: 'none',
  entry: {
    app: [pathConfig.INDEX_JS],
  },
  output: {
    publicPath: pathConfig.DIST,
    path: pathConfig.DIST,
  },
  plugins: [
    new CleanWebpackPlugin([pathConfig.DIST], {
      root: __dirname,
      verbose: true,
    }),
    new WebpackPlugin.optimize.OccurrenceOrderPlugin(),
    new PurifyCSSPlugin({
      styleExtensions: ['.css', '.scss'],
      moduleExtensions: ['.html'],
      purifyOptions: {
        info: true,
        rejected: false,
        minify: true,
      },
      paths: glob.sync(pathConfig.INDEX_HTML),
    }),
    new UglifyJSPlugin({
      sourceMap: true,
    }),
    new MinifyPlugin(minifyOpts, pluginOpts),
  ],
};
