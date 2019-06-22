const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Excel',
      favicon: './src/assets/favicon.ico',
    }),
    new CopyWebpackPlugin([
      {
        from: './src/assets',
        to: './assets',
      },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [/node_modules/, /\.spec.ts$/],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader',
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: './',
            },
          },
        ],
      },
    ],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    port: process.env.PORT,
  },
};
