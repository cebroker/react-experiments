var path = require('path');
var fs = require('fs');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  entry: path.join(__dirname, 'src/server.js'),
  target: 'node',
  node: {
    __dirname: false
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.js',
    publicPath: '/'
  },

  // keep node_module paths out of the bundle
  externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
    'react-dom/server', 'react/addons',
  ]).reduce(function (ext, mod) {
    ext[mod] = 'commonjs ' + mod
    return ext
  }, {}),

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
      },
      {
        test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
      },
    ]
  },

  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, 'src/images'),
        to: path.join(__dirname, 'dist/public/images')
      }
    ]),
    new ExtractTextPlugin('/public/styles.css')
  ]
}

module.exports = config;
