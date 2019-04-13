const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/src/js/index.js'),
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'build'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    host: 'localhost',
    port: '3000',
    hot: true,
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'TodoList React App',
    filename: 'index.html',
    template: path.join(__dirname, '/dist/index.html'),
  })],
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\s?.css$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['transform-class-properties'],
        },
      },
    ],
  },
};
