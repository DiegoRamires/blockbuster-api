const express = require('express')
const app = use(express)

const port = process.env.PORT || 3333
app.listen(port, () => {
  console.log(`The server is running on ${port}`)
  console.log("Hit 'ctrl + c' to shut down")
})
