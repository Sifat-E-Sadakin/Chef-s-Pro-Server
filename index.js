const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

app.use(cors())

let data = require('./Data/data.json')

app.get('/', (req, res) => {
    res.send(data)
  })

app.get('/:id', (req, res)=>{
    let id =req.params.id;
    let chef = data.find(c=>c.id == id)
    res.send(chef)

})
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

