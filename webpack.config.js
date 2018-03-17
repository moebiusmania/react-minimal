

const path = require('path');

const env = process.env.NODE_ENV || 'development';

module.exports = {
  entry: {
    demo: './src/index.js'
  },
  mode: env,
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'main.js',
    chunkFilename: '[chunk].js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },{
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    watchContentBase: true,
    watchOptions: {
      poll: true
    },
    compress: true,
    port: 8090,
    host: 'localhost',
    hot: true,
    inline: true
  }
};