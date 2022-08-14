const webpack = require('webpack')
const path = require('path')
const dotenv = require('dotenv')

// Production .env file is outside the project directory
dotenv.config({ path: path.join(__dirname, '../../.env') })

const { API_URL } = process.env

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      // Need to manually set all of the dotenv .env values here
      process: { env: { API_URL: JSON.stringify(API_URL) } },
    }),
  ],
}
