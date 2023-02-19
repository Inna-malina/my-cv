const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');

let mode = 'development';
let target = 'web';
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
  target = 'browserslist';
}

const plugins = [
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css',
  }),
  new HtmlWebpackPlugin({
    template: './src/index.html',
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css',
  }),
  new FileManagerPlugin({
    events: {
      onStart: {
        delete: ['dist'],
      },
    },
  }),
];

module.exports = {
  mode,
  target,
  plugins,
  devtool: 'source-map',
  entry: './src/index.js',
  // devServer: {
  //   hot: true,
  // },

  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[hash][ext][query]',
    // clean: true,
    clean: {
      keep: /\.git/,
    },
  },

  module: {
    rules: [{
        test: /\.(html)$/,
        use: ['html-loader']
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test:/\ico$/,
        type: 'asset/resource',
        generator: {
          filename:'assets/[name][ext]'
        }
      },
      {
        test:/\png$/i,
        type: 'asset/resource',
        generator: {
          filename:'assets/[name][ext]'
        }
      },
      {
        test:/\svg$/i,
        type: 'asset/resource',
        generator: {
          filename:'assets/[name][ext]'
        }
      },
      {
        test:/\jpeg$/i,
        type: 'asset/resource',
        generator: {
          filename:'assets/[name][ext]'
        }
      },
      {
        test:/\jpg$/i,
        type: 'asset/resource',
        generator: {
          filename:'assets/[name][ext]'
        }
      },
      {
        test:/\webp$/i,
        type: 'asset/resource',
        generator: {
          filename:'assets/[name][ext]'
        }
      },
      // {
      //   test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
      //   loader: 'url',
      //   type: 'asset/resource',
      //   type: mode === 'production' ? './asset' : 'asset/resource',

      // },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // options: {
          //   cacheDirectory: true,
          // },
        },
      },
    ],
  },

  devServer: {
    watchFiles: path.join(__dirname, 'src'),
    port: 9000,
  },
};