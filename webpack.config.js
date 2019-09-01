const marked = require("marked");
const highlightjs = require("highlightjs");

module.exports = {
  bail: true,
  entry: "./src/app.js",
  output: {
    path: `${__dirname}/dist`,
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "html-loader"
          },
          {
            loader: "markdown-loader",
            options: {
              renderer: new marked.Renderer(),
              highlight: code => highlightjs.highlightAuto(code).value
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  devServer: {
    publicPath: "/dist/",
    port: 9000,
    hot: true,
    historyApiFallback: {
      index: "index.html"
    }
  },
  stats: "errors-only"
};
