const Sentry = require('@sentry/node')
const config = require('../utils/config')
Sentry.init({
  dsn: config.SENTRY_DNS,
})

const info = (...params) => {
  console.log(...params)
}

const error = (...params) => {
  console.error(...params)
}
const sendToSentry = (error) => {
  if (error instanceof Error) {
    Sentry.captureException(error)
  }
}

module.exports = {
  info,
  error,
  sendToSentry,
  Sentry,
}
