const express = require('express')
const app = express();
const cors = require('cors');
const port = 3000;


app.use(cors());
const chefs= require('./data/chefs.json')
const details = require('./data/details.json')
const items = require('./data/foodItems.json')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/items', (req, res) => {
  res.send(items)
})


app.get('/chefs', (req, res) => {
  res.send(chefs)
})

app.get('/details/:id', (req, res) => {
  const id = req.params.id;
  // res.send(details)
  const selectedChef = details.find(c=>c.id ==id)
  res.send(selectedChef)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})