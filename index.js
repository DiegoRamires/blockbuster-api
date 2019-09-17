const Joi = require('joi')
const express = require('express')
const morgan = require('morgan')
const app = express()

const genres = require('./routes/genres')

app.use(express.json())
app.use(morgan('tiny'))
app.use('/api/genres', genres)

const port = process.env.PORT || 3333
app.listen(port, () => {
  console.log(`The server is running on ${port}`)
  console.log("Hit 'ctrl + c' to shut down")
})
