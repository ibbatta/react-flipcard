const glob = require('glob');
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
  plugins: [
    new WebpackPlugin.optimize.OccurrenceOrderPlugin(),
    new MinifyPlugin(minifyOpts, pluginOpts),
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
      paths: glob.sync(pathConfig.INDEX_HTML),
    }),
  ],
};
