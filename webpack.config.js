const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

const isProd = process.env.NODE_ENV === 'production'

const plugins = [
  new CleanWebpackPlugin(['dist']),

  new HtmlWebpackPlugin({
    title: 'Burzomir Resume',
    favicon: './assets/favicon.ico'
  }),

  new ExtractTextPlugin('style.[contenthash].css'),

  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendors',
    minChunks: function (module) {
      return isVendorModule(module)
    }
  }),

  new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest'
  })
]

const productionPlugins = [
  new UglifyJSWebpackPlugin(),

  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  })
]

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: '[name].[chunkhash].js',
    path: path.join(__dirname, '/dist'),
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                importLoaders: 1
              }
            }
          ]
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                importLoaders: 1
              }
            },
            {
              loader: 'sass-loader'
            },
            {
              loader: 'postcss-loader',
              options: {
                parser: 'postcss-scss',
                plugins: [
                  require('autoprefixer')(),
                  require('stylelint')()
                ]
              }
            }
          ]
        })
      },
      {
        test: /\.(svg|gif|jpg|png|woff|woff2|ttf|eot)$/,
        loader: 'url-loader?limit=10000'
      }
    ]
  },
  plugins: isProd ? plugins.concat(productionPlugins) : plugins
}

function isVendorModule (module) {
  var context = module.context

  if (typeof context !== 'string') {
    return false
  }

  return context.indexOf('node_modules') !== -1
}
