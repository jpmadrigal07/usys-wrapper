const webpack = require('webpack')
const path = require('path')
const dotenv = require('dotenv')

dotenv.config({ path: path.join(__dirname, '../.env') })

const { API_URL, PORT } = process.env

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: PORT,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      // Need to manually set all of the dotenv .env values here
      process: { env: { API_URL: JSON.stringify(API_URL) } },
    }),
  ],
}
