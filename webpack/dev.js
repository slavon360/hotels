const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const conf = {
  devtool: 'eval-sourcemap',
  entry: path.join(__dirname, '../src') + '/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'scripts/main.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: '/node_modules',
        loader: 'babel-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
       use: [
         'style-loader',
         'css-loader',
         {
           loader: 'postcss-loader',
           options: {
              plugins: () => [require('autoprefixer')]
            }
         },
         'sass-loader',
       ],
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new webpack.DefinePlugin(
      {'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }}
    )
  ],
  devServer: {
    publicPath: '/',
    historyApiFallback: true,
    hot: true,
    inline: true,
    overlay: true,
    watchContentBase: true,
  }
}


module.exports = conf;
