const { merge } = require("webpack-merge");
const baseConfig = require("./base.config.js");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ManifestWebpackPlugin = require("webpack-manifest-plugin");

const DIR_BASE = path.join(__dirname, "../build");

const pathResolve = (route) => path.resolve(__dirname, route);

module.exports = merge(baseConfig, {
  output: {
    path: DIR_BASE,
    publicPath: "/public",
    filename: "[name].js",
  },
  resolve: {
    alias: {
      "@pages": pathResolve("../src/pages"),
      "@components": pathResolve("../src/components"),
      "@styledComponents": pathResolve("../src/styled/Components"),
    },
  },
  module: {
    rules: [
      {
        test: /\.html/,
        use: ["html-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "public/index.html",
      filename: "index.html",
      title: "DragonBall Store",
      favicon: "public/favicon.ico",
    }),
    new ManifestWebpackPlugin({
      publicPath: "/public",
    }),
  ],
});
