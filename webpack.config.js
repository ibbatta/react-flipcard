const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const cssnext = require('postcss-cssnext');

const paths = {
  DIST: path.join(__dirname, 'dist'),
  SRC: path.join(__dirname, 'src'),
};

const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    plugins: [
      cssnext,
    ],
  },
};

module.exports = {
  context: path.resolve(__dirname, paths.SRC),
  entry: {
    app: ['react-hot-loader/patch', './index.jsx'],
  },
  output: {
    path: paths.DIST,
    filename: '[name].bundle.js',
  },
  devServer: {
    contentBase: paths.SRC,
    compress: true,
    port: process.env.PORT || 9000,
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader', 'eslint-loader'],
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          postcssLoader,
        ],
      }),
    }, {
      test: /\.(sass|scss)$/,
      exclude: /node_modules/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          postcssLoader,
          'sass-loader',
        ],
      }),
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: ['file-loader'],
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: ['file-loader'],
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('[name].bundle.css'),
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html'),
      inject: true,
      cache: false,
    }),
  ],
};
