
const path = require('path');

module.exports = {
    mode: 'development',

    output: {
        path: path.resolve(__dirname, 'docs'),
      },

    module: {
        rules: []
    },

    optimization: {},

    plugins: [],
  };