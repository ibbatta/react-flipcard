const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cssnext = require('postcss-cssnext');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const envConfig = process.env.NODE_ENV === 'production' ? require('./config/webpack.prod.config') : require('./config/webpack.dev.config');
const pathConfig = require('./config/path.config');

const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    plugins: [
      cssnext,
    ],
  },
};

module.exports = merge(envConfig, {
  context: pathConfig.CONTEXT,
  output: {
    path: pathConfig.DIST,
    filename: '[name].bundle.js',
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
    modules: [
      pathConfig.CONTEXT, 'node_modules',
    ],
  },
  plugins: [
    new CleanWebpackPlugin([pathConfig.DIST], {
      root: __dirname,
      verbose: true,
    }),
    new ExtractTextPlugin({
      filename: '[name].bundle.css',
    }),
  ],
});
