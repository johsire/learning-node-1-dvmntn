const express = require('express');
const bodyParser = require('body-parser');
const port = 3005;

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/build'))

function addStuff (x, y){
  return x + y;
}

// Params
app.get('/api/calculate/add/:x/:y', (req, res) => {
  let total = req.params.x * 1 + req.params.y * 1

  res.send({total:total});
})

// Body
app.post('/api/calculate/subtract', (req, res) => {
  console.log(req.body);
  res.send('Request received');
})

app.listen(port, ()=>{
  console.log('Server running on port: ' + port);
})