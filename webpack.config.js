

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const pkg = require('./package.json');

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
  plugins: [
    new WebpackNotifierPlugin({
      title: pkg.name,
      alwaysNotify: true
    }),
    new HtmlWebpackPlugin({
      title: pkg.name,
      description: pkg.description,
      template: './src/assets/index.html'
    }),
    new WebpackPwaManifest({
      name: pkg.name,
      short_name: pkg.name,
      description: pkg.description,
      background_color: '#ffffff',
      theme_color: '#147EB2'
      // icons: [
      //   {
      //     src: path.resolve('src/assets/icon.png'),
      //     sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
      //   }
      // ]
    })
  ],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },{
        test: /\.scss$/,
        use: [
          'style-loader', 
          'css-loader?modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]', 
          'sass-loader']
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