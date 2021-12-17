const mongoose = require('mongoose')
const config = require('../utils/config')
const logger = require('../utils/logger')

mongoose
  .connect(config.MONGODB_URI)
  // eslint-disable-next-line no-unused-vars
  .then((result) => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB: ', error.message)
  })

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
})

blogSchema.set('toJSON', {
  transform: (document, returnObject) => {
    returnObject.id = returnObject._id.toSting
    delete returnObject._id
    delete returnObject.__v
  },
})

module.exports = mongoose.model('Blog', blogSchema)
