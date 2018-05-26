const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/client/src/app.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/client/dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env','@babel/preset-react']
          }
        }
      }
    ]
  }
};