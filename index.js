const express = require('express');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => res.send('<h1>The girl is Arya Stark of Winterfell. And i\'m going home.</h1>'));

app.listen(PORT);
