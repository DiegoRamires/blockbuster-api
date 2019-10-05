const mongoose = require('mongoose')
const express = require('express')
const morgan = require('morgan')
const app = express()

mongoose.connect('mongodb://localhost/blockbuster',
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB!'))

const genres = require('./routes/genres')

app.use(genres)
app.use(express.json())
app.use(morgan('tiny'))
app.use('/api/genres', genres)

const port = process.env.PORT || 3333
app.listen(port, () => {
  console.log(`The server is running on ${port}`)
  console.log("Hit 'ctrl + c' to shut down")
})
