const express = require('express');
const bodyParser = require('body-parser');
const port = 3005;

const app = express();



app.use(bodyParser.json());
app.use(express.static(__dirname + '/build'))

function addStuff (x, y){
  return x + y;
}

let cats = ['garfield', 'max'];

app.get('/api/cats', (req, res)=>{
  return res.send(cats);
})

app.get('/api/cats/:id', (req, res)=>{
  let index = req.params.id;
  if (cats[index]){
    return res.send(cats[index]);
  }
  return res.status(404).send('No cat with that id');
})

app.post('/api/cats', (req, res)=>{
  
})

app.put('/api/cats/:id', (req, res)=>{
  
})

app.delete('/api/cats/:id', (req, res)=>{
  
})

// Params
app.get('/api/calculate/add/:x/:y', (req, res) => {
  let total = req.params.x * 1 + req.params.y * 1

  res.send({total:total});
})

// Body


// Stray front end code
// axios.post('/api/calculate/subtract', {x:5, y:3})

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