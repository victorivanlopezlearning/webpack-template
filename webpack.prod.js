
const HtmlWebpackPlugin     = require('html-webpack-plugin');
const MiniCssExtractPlugin  = require("mini-css-extract-plugin");
const CopyPlugin            = require("copy-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const path = require('path');

module.exports = {
    mode: 'production',

    output: {
        clean: true, // Clean the output directory before emit
        path: path.resolve(__dirname, 'docs'), // The output directory as an absolute path
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'assets/img/[hash][ext][query]',
      },

    module: {
        rules: [
          {
            test: /\.html$/i,
            loader: 'html-loader',
            options: {
              sources: false, // Disables attributes processing
            },
          },
          {
            test: /\.css$/i,
            exclude: /styles.css$/,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /styles.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
          },
          {
            test: /\.(png|jpe?g|gif)$/,
            type: 'asset/resource'
          },
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
    },

    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin(),
        new CssMinimizerPlugin(),
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: 'My Webpack App',
        template: './src/index.html' // Load a custom template (lodash by default)
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[fullhash].css',
        ignoreOrder: false, // Enable to remove warnings about conflicting order
      }),
      new CopyPlugin({
        patterns: [
          { from: 'src/assets', to: 'assets/' },
        ],
      }),
    ],
  };