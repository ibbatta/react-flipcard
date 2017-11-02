const WebpackPlugin = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pathConfig = require('./path.config');

module.exports = {
  context: pathConfig.SRC,
  devtool: 'source-map',
  entry: {
    dev: ['react-hot-loader/patch', pathConfig.INDEX_JS],
  },
  output: {
    path: pathConfig.DIST,
  },
  devServer: {
    contentBase: pathConfig.SRC,
    compress: true,
    port: process.env.PORT || 9000,
  },
  plugins: [
    new WebpackPlugin.HotModuleReplacementPlugin(),
    new WebpackPlugin.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: pathConfig.INDEX_HTML,
      inject: true,
    }),
  ],
};
