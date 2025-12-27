const express = require('express');
const cors = require('cors');
const explainRoutes = require('./routes/explainRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', explainRoutes);

module.exports = app;
