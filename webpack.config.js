var path = require('path');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
   devServer: {
    stats: {chunks:false, warnings: true},
  },
  context: path.join(__dirname, 'src'),
  devtool: 'source-map',
  entry: ['babel-polyfill', './client.js'],

  output: {
    path: path.join(__dirname, 'dist/public'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!postcss!sass'
      },
      {
        test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
        loader: 'file',
      },
    ]
  },
  eslint: {
    configFile: path.join(__dirname, 'eslint.js'),
    useEslintrc: false
  },
  postcss: function() {
    return [autoprefixer];
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'index.html',
      favicon: path.resolve(__dirname, 'favicon.ico')
    })
  ],
}

module.exports = config;
