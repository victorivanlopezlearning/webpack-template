
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',

    output: {
        clean: true, // Clean the output directory before emit
        path: path.resolve(__dirname, 'docs'), // The output directory as an absolute path
      },

    module: {
        rules: [
          {
            test: /\.html$/i,
            loader: 'html-loader',
            options: {
              sources: false, // Disables attributes processing
            },
          }
        ]
    },

    optimization: {},

    plugins: [
      new HtmlWebpackPlugin({
        title: 'My Webpack App',
        template: './src/index.html' // Load a custom template (lodash by default)
      })
    ],
  };