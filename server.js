
// config
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Set view engine
app.set('view engine', 'ejs');

// Pokemon model
const pokemon = require('./models/pokemon');

// routes
// index route
app.get('/pokemon', (req, res) => {
  res.render('index', {
    pokemon: pokemon
  });
});

// show route
app.get('/pokemon/:id', (req, res) => {
  const pokemonIndex = req.params.id;
  const thisPokemon = pokemon[pokemonIndex];

  res.render('show', {
    pokemon: thisPokemon,
    pokemonIndex: pokemonIndex
  });
});

app.listen(PORT, () => console.log(`Server started successfully on port ${PORT}`));