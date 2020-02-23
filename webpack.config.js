module.exports = {
  entry: "./client/index.js", // assumes your entry point is the index.js in the root of your project folder
  mode: "development",
  output: {
    path: __dirname, // assumes your bundle.js will also be in the root of your project folder
    filename: "./public/bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devtool: "source-maps",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      //use style-loader/css-loader combo for anything matchng the .css extension
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      //image loader
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4
              },
              gifsicle: {
                interlaced: false
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          }
        ]
      }
    ]
  }
};
