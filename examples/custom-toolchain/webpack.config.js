const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    assetModuleFilename: "img/[hash][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png$/,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    alias: {
      css: path.resolve(__dirname, "public/css"),
      img: path.resolve(__dirname, "public/img"),
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 8001,
    hot: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: "./public/index.html",
    }),
  ],
};
