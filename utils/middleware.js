const requestLogger = (req, res, next) => {
  console.log('LOGGED')
  next()
}

module.exports = {
  requestLogger,
}
