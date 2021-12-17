const Blog = require('../models/post')
const logger = require('../utils/logger')
const blogRoutes = require('express').Router()

blogRoutes.get('/api/blogs', (request, response) => {
  Blog.find({})
    .then((blogs) => {
      response.json(blogs)
    })
    .catch((error) => {
      logger.error(error)
      logger.sendToSentry(error)
    })
})

blogRoutes.post('/api/blogs', (request, response) => {
  const blog = new Blog(request.body)

  blog
    .save()
    .then((result) => {
      response.status(201).json(result)
    })
    .catch((error) => {
      logger.error(error)
      logger.sendToSentry(error)
    })
})

module.exports = blogRoutes
