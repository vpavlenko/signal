const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  context: __dirname,
  entry: {
    browserMain: "./src/main/index.tsx",
    browserSynth: "./src/synth/index.tsx",
  },
  output: {
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: "babel-loader",
        exclude: [/node_modules/],
      },
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf)$/,
        loader: "url-loader",
      },
    ],
  },
  resolve: {
    modules: ["src", "node_modules", "src/main", "src/common"],
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      filename: "main.html",
      chunks: ["browserMain"],
      template: path.join(__dirname, "public", "main.html"),
    }),
    new HtmlWebpackPlugin({
      inject: true,
      filename: "synth.html",
      chunks: ["browserSynth"],
      template: path.join(__dirname, "public", "synth.html"),
    }),
  ],
}