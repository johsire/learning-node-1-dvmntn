const express = require('express');
const bodyParser = require('body-parser');
const catsCtrl = require('./controllers/cats');
const axios = require('axios');
const port = 3005;

const app = express();

app.get('/api/useDarkSky', (req, res)=>{
  
  axios.get('darkskies.com/' + req.path)
  .then(resp=>{
    res.send(resp.data);
  })
})
axios.get('http://google.com').then(resp=>{
  console.log(resp);
})



app.use(bodyParser.json());
app.use(express.static(__dirname + '/build'))

function addStuff (x, y){
  return x + y;
}



app.get('/api/cats', catsCtrl.list)
app.get('/api/cats/:id', catsCtrl.read)
app.post('/api/cats', catsCtrl.create)
app.put('/api/cats/:id', catsCtrl.update)
app.delete('/api/cats/:id', catsCtrl.delete)

// Params
app.get('/api/calculate/add/:x/:y', (req, res) => {
  let total = req.params.x * 1 + req.params.y * 1

  res.send({total:total});
})

// Body


// Stray front end code
// axios.get('/api/weather/84601', {x:5, y:3})

app.post('/api/calculate/subtract', (req, res) => {
  console.log(req.body);
  if (!req.body.x || !req.body.y){
    return res.status(400).send("You must provide a x and y property on the body");
  }

  let total = req.body.x - req.body.y
  res.send({total:total});
})

app.listen(port, ()=>{
  console.log('Server running on port: ' + port);
})