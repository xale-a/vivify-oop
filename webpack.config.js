const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');

const config = {
  target: 'node',
  entry: {
    main: './src/index.ts'
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'ts-loader',
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new NodemonPlugin(),
  ],
};

module.exports = (env) => {
  config.mode = env.production ? 'production' : 'development';
  config.devtool = env.production ? 'source-map' : 'eval-source-map';

  return config;
};
