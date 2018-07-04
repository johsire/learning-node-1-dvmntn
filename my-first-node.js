const express = require('express');
const app = express();
const port = 3005;

app.use(express.static(__dirname + '/build'));

function addStuff(x, y){
  return x + y;
}

app.get('/api/calculate/add', (req, res) => {
  res.send(42);
});

app.listen(port, ()=>{
  console.log('Server running on port: ' + port);
});
