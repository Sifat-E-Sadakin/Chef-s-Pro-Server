const express = require('express')
const app = express()
const port = 3000

let data = require('./Data/data.json')

app.get('/', (req, res) => {
    res.send(data)
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })