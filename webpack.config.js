module.exports = {
  entry: "./entry.js",
  output:{
    path: __dirname,
    filename: "dist/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query:
          {
            presets:['react']
          }
      }
    ]
  }
}