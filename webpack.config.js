var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  context: path.join(__dirname, 'src'),
  devtool: 'source-map',
  entry: ['babel-polyfill', './client.js'],

  output: {
    path: path.join(__dirname, 'dist/public'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({template: 'index.html'})
  ],
}

module.exports = config;
