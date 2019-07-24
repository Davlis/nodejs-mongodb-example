require('dotenv').config()
const express = require('express')

const db = require('./db')
const routes = require('./routes')

const { errorHandler, notFoundHandler } = require('./middlewares')

const port = process.env.PORT

const start = async () => {
  await db.init()
  
  const app = express()

  app.use(express.json())

  app.use(routes)

  app.use(notFoundHandler)
  app.use(errorHandler)
  
  app.listen(port, () => console.log(`Application listening on port ${port}!`))
}

start()
  .catch(error => console.log('Fail when starting application', error))