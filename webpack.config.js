// const glob = require('glob');
const path = require('path');

const config = {
  mode: process.env.NODE_ENV,
  // entry: [
  //   ...glob.sync('./src/util/*'),
  //   './src/DistortableImageOverlay.js',
  //   './src/DistortableCollection.js',
  //   './src/edit/getEXIFdata.js',
  //   './src/edit/handles/EditHandle.js',
  //   ...glob.sync('./src/edit/handles/*', {
  //     ignore: './src/edit/handles/EditHandle.js',
  //   }),
  //   './src/iconsets/IconSet.js',
  //   './src/iconsets/KeymapperIconSet.js',
  //   './src/iconsets/ToolbarIconSet.js',
  //   './src/edit/actions/EditAction.js',
  //   ...glob.sync('./src/edit/actions/*', {
  //     ignore: './src/edit/actions/EditAction.js',
  //   }),
  //   './src/edit/toolbars/DistortableImage.PopupBar.js',
  //   './src/edit/toolbars/DistortableImage.ControlBar.js',
  //   './src/edit/DistortableImage.Edit.js',
  //   './src/edit/DistortableCollection.Edit.js',
  //   './src/components/DistortableImage.Keymapper.js',
  //   './src/mapmixins/DoubleClickZoom.js',
  //   ...glob.sync('./src/mapmixins/*', {
  //     ignore: './src/mapmixins/DoubleClickZoom.js',
  //   }),
  // ],
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'react.leaflet.distortableimage.js',
    hotUpdateChunkFilename: 'hot/hot-update.js',
    hotUpdateMainFilename: 'hot/hot-update.json',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '/'),
    },
    host: 'localhost',
    port: 8081,
    hot: true,
    open: ['example/public/index.html'],
    devMiddleware: {
      publicPath: '/dist/',
      writeToDisk: true,
    },
    client: {
      logging: 'none',
    },
  },
  devtool: 'source-map',
  stats: 'errors-only',
  plugins: [],
};

module.exports = config;
