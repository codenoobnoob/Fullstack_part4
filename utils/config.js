require('dotenv').config()

const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI
const SENTRY_DNS = process.env.SENTRY_DNS

module.exports = {
  MONGODB_URI,
  PORT,
  SENTRY_DNS,
}
