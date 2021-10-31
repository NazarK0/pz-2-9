const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '/src/app/index.js'),
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: [/node_modules/],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/public', 'index.html'),
      inject: 'body',
    }),
    new FaviconsWebpackPlugin( path.join(__dirname, 'src/public/assets', 'icon.jpg')),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'src/public'),
    },
    port: 3000,
    historyApiFallback: true,
    client: {
      progress: true,
    },
  },
}
