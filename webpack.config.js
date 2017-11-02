const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cssnext = require('postcss-cssnext');
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
  output: {
    filename: '[name].bundle.js',
  },
  module: {
    rules: [{
      test: /\.(html|xhtml|xml|hbs|ejs)$/,
      exclude: /(node_modules|index\.html)/,
      loader: 'file-loader',
    }, {
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
      exclude: /node_modules/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        publicPath: '/',
      },
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      exclude: /node_modules/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        publicPath: '/',
      },
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      pathConfig.CONTEXT, 'node_modules',
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].bundle.css',
    }),
  ],
});
