require('dotenv').config()

module.exports = {
  target: 'serverless',
  env: {
    AUTHENTICATION_SERVICE: process.env.AUTHENTICATION_SERVICE,
    FRONTEND_URL: process.env.FRONTEND_URL,
    KINCHE_COOKIES_DOMAIN: process.env.KINCHE_COOKIES_DOMAIN,
    KINCHE_COOKIES_TOKEN: process.env.KINCHE_COOKIES_TOKEN,
    STATICKIT_ID: process.env.STATICKIT_ID
  }
}
