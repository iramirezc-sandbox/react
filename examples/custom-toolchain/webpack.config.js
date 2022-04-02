const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    // TODO: how to configure publicPath?
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
    ],
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 8001,
    hot: true,
    open: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: "./public/index.html",
    }),
  ],
};
