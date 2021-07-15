const path = require("path");
const webpackMerge = require("webpack-merge");
const autoprefixer = require("autoprefixer");
const webpackCommon = require("./common.config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// webpack plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DefinePlugin = require("webpack/lib/DefinePlugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const LoaderOptionsPlugin = require("webpack/lib/LoaderOptionsPlugin");

module.exports = webpackMerge(webpackCommon, {
  bail: true,

  devtool: "source-map",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "../dist"),

    filename: "[name]-[hash].min.js",

    // sourceMapFilename: "[name]-[hash].map",

    chunkFilename: "[id]-[chunkhash].js",

    publicPath: "/",
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              importLoaders: 2,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, "postcss.config.js"),
              },
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, "../static/index.html"),
      favicon: path.resolve(__dirname, "../static/favicon.ico"),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new CopyWebpackPlugin(
      { patterns: [{ from: path.resolve(__dirname, "../static") }] },
      {
        ignore: ["index.html", "favicon.ico"],
      }
    ),
    new CleanWebpackPlugin(["dist"], {
      root: path.resolve(__dirname, ".."),
      exclude: ".gitignore",
    }),
    new DefinePlugin({
      "process.env": {
        NODE_ENV: '"production"',
      },
    }),
    new MiniCssExtractPlugin(),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          // ecma: 7,
          ie8: true,
          // warnings: false,
        },
        mangle: {
          ie8: true,
        },
        output: {
          comments: false,
          ie8: true,
        },
      },
      sourceMap: true,
    }),
    new LoaderOptionsPlugin({
      options: {
        context: "/",
        sassLoader: {
          includePaths: [path.resolve(__dirname, "../src")],
        },
      },
    }),
  ],
});
