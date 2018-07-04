let cats = ['garfield', 'max'];


// This will be our
// catsCtrl obj
module.exports = {
  list:(req, res) => {
    return res.send(cats);
  },
  read:(req, res) => {
    let index = req.params.id;
    if (cats[index]) {
      return res.send(cats[index]);
    }
    return res.status(404).send('No cat with that id');
  },
  create:(req, res) => {
    // Optionally check for required properties on the body object
    cats.push(req.body);
    res.send('New Cat Added');
  },
  update:(req, res) => {
    if (! cats[req.params.id]) {
      return res.status(404).send('No cat to update with that id');
    }
    cats[req.params.id] = req.body;
    res.send('Cat updated');
  },
  delete:(req, res)=>{
    if (! cats[req.params.id]) {
      return res.status(404).send('No cat to delete with that id');
    }
    cats.splice(req.params.id, 1);
    res.send('Cat deleted');
  }
};