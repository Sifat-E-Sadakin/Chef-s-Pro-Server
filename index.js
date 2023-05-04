const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

app.use(cors())

let data = require('./Data/data.json')
let seaFood = require('./Data/seafood.json')
let streetFood = require('./Data/streetfood.json')
let traditional = require('./Data/traditionalfood.json')


app.get('/', (req, res) => {
    res.send(data)
  })

app.get('/:id', (req, res)=>{
    let id =req.params.id;
    let chef = data.find(c=>c.id == id)
    res.send(chef)

})

app.get('/seaFood', (req, res) => {
  res.send(seaFood)
})
app.get('/streetFood', (req, res) => {
  res.send(streetFood)
})
app.get('/traditional', (req, res) => {
  res.send(traditional)
})
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

