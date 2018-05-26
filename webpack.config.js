const path = require('path');

module.exports = {
  entry: path.join(__dirname, './client/src/app.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        exclude: "/node_modules/",
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["env","react", "es2015"],
          plugins: ['transform-class-properties']
        }
      }
    ]
  }
};