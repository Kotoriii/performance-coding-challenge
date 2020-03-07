const path = require('path');

module.exports = {
  entry: './src/js/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  resolve: {
    modules: ['src', 'node_modules']    
  },

  module: {
    rules: [
    {
      test: /\.css$/,
      use: [
      'style-loader',
      'css-loader',
      ],
    },
    {
      test: /\.(svg|jpg)$/,
      use: [
        'file-loader',
      ],
    },
    ],
  },

  mode: 'development'
};