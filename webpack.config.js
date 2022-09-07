const path = require("path");

const config = {
  mode: process.env.NODE_ENV,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
    filename: "react.leaflet.distortableimage.js",
    hotUpdateChunkFilename: "hot/hot-update.js",
    hotUpdateMainFilename: "hot/hot-update.json",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
if (process.env.NODE_ENV === "production") {
  config.plugins.push(
    new MergeIntoSingleFilePlugin({
      files: {
        "vendor.js": [
          "./node_modules/leaflet-toolbar/dist/leaflet.toolbar.js",
          "./node_modules/webgl-distort/dist/webgl-distort.js",
          "./node_modules/glfx/glfx.js",
          "./node_modules/exif-js/exif.js",
        ],
        "vendor.css": ["./node_modules/leaflet-toolbar/dist/leaflet.toolbar.css"],
      },
      transform: {
        "vendor.js": (code) => require("uglify-js").minify(code).code,
      },
    })
  );
  config.plugins.push(
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*", "!leaflet.distortableimage.css"],
    })
  );
}
module.exports = config;
