const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
        {
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: {
              progressive: true,
              quality: 65
            }
          }
        }
      ]
    },
    ],
  },

  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },

  mode: 'development'
};