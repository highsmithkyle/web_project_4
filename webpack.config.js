// following live coding

// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const path = require("path");

// module.exports = {
// entry: "./src/index.js",
// output: {
//   filename: "bundle.js",
//   path: path.resolve(__dirname, "dist"),
//   clean: true,
// },

// mode: "development",
// module: {
//   rules: [
//     {
//       test: /\.css$/i,
//       use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
//     }
//   ]
// }
// plugins: [
//   new HtmlWebpackPlugin({
//     template: "./src/index.html",
//   }),
// ],
// },


//from the theory


const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    main: './src/pages/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: ''
  },
  target: ['web', 'es5'],
  stats: { children: true },
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    compress: true,
    port: 8080,
    open: true
  },
  module: {
    rules: [
      {

        test: /\.js$/,

        loader: "babel-loader",

        exclude: "/node_modules/"
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          "postcss-loader"
        ],
      },
      {

        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: "asset/resource"
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/pages/index.html"
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin()
  ]
}