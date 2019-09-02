require('dotenv').config()

module.exports = {
  target: 'serverless',
  env: {
    STATICKIT_ID: process.env.STATICKIT_ID,
    AUTHENTICATION_SERVICE: process.env.AUTHENTICATION_SERVICE
  }
}
