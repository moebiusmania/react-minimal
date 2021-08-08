const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const pkg = require('./package.json');

const env = process.env.NODE_ENV || 'development';

module.exports = {
  entry: {
    main: './src/index.tsx'
  },
  mode: env,
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].[hash].js',
    chunkFilename: '[chunk].[hash].js',
    clean: true
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
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
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader' }
        ]
      }, {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          //{ loader: 'css-loader?modules=true&localIdentName=[local]___[hash:base64:5]' },
          { loader: 'css-loader' , options: { modules: true} },
          { loader: 'sass-loader' },
        ]
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
    port: 3000,
    host: 'localhost',
    hot: true,
    inline: true
  }
  
};