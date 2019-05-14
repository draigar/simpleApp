const path = require('path');

module.exports = {
  entry: './www/src/index.js',
  output: {
    path: path.resolve(__dirname, 'www/dist'),
    filename: './bundle.js'
  },
  mode: 'development',
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
};