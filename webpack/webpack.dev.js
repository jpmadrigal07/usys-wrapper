const webpack = require('webpack')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: 4000,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Zkript 1'),
    }),
  ],
}
