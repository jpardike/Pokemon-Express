
// config
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Pokemon model
const pokemon = require('./pokemon');

app.get('/pokemon', (req, res) => {
  res.send(pokemon);
})

app.listen(PORT, () => console.log(`Server started successfully on port ${PORT}`));