const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

const blogRoutes = require('./controllers/posts')

app.use(cors())
app.use(express.json())
app.use(blogRoutes)

module.exports = app
