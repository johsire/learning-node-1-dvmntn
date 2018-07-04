const express = require('express');
const app = express();
const port = 3005;

app.use(express.static(__dirname + '/build'))

app.listen(port, ()=>{
  console.log('Server running on port: ' + port);
})