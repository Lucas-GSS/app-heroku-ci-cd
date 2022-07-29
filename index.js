const express = require('express');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => res.send(`<h1>Rodando na porta ${PORT}</h1>`));

app.listen(PORT);