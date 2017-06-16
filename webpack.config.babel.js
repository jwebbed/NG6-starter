const path = require("path");

module.exports = {
  devtool: "inline-source-map",
  entry: path.resolve(__dirname, "./client/app.js"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./bin")
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader",
            options: {
              includePaths: ["absolute/path/a", "absolute/path/b"]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      },

      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
					{
						loader: 'ng-annotate-loader',
					},

          {
            loader: "babel-loader",
            options: {
              presets: ["env"]
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ["file-loader?hash=sha512&digest=hex&name=[hash].[ext]"]
      }
    ]
  },
  plugins: []
};
