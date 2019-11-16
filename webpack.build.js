const path = require('path');
const BASE_DIR = process.cwd();
const COMPONENT_NAME = 'FigmaEmbed';
let COMPONENT_FILE = 'react-figma-embed';

const config = {
  mode: 'production',
  optimization: {},
};

function getPackageMain() {
  return require(path.resolve(BASE_DIR, 'package.json')).main;
}

if (process.env.MINIFY) {
  config.optimization.minimize = true;
  COMPONENT_FILE += '.min';
}

module.exports = {
  ...config,
  entry: path.resolve(BASE_DIR, getPackageMain()),
  output: {
    filename: COMPONENT_FILE + '.js',
    path: path.resolve(BASE_DIR, 'dist/'),
    library: COMPONENT_NAME,
    libraryTarget: 'umd',
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [],
};
