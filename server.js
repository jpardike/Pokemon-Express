
// config
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Set view engine
app.set('view engine', 'ejs');

// Pokemon model
const pokemon = require('./models/pokemon');

app.get('/pokemon', (req, res) => {
  res.render('index', {
    pokemon: pokemon
  });
});

app.listen(PORT, () => console.log(`Server started successfully on port ${PORT}`));