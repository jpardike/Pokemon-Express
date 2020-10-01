
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;


app.listen(PORT, () => console.log(`Server started successfully on port ${PORT}`));