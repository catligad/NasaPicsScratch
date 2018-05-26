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
        query: {
          presets: ["react", "es2015"]
        }
      }
    ]
  }
};