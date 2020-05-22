// import dependencies and initialize express
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongo = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

const connectionString = 'mongodb+srv://iDownward:oie123123@cluster0-pu2nm.mongodb.net/test?retryWrites=true&w=majority';

mongo.connect(connectionString, { useNewUrlParser: true });
requireDir('./models');

const healthRoutes = require('./routes/health-route');
const swaggerRoutes = require('./routes/swagger-route');
const noteRoutes = require('./routes/note-route');

const app = express();

// enable parsing of http request body
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes and api calls
app.use('/health', healthRoutes);
app.use('/swagger', swaggerRoutes);
app.use('/note', noteRoutes);

// default path to serve up index.html (single page application)
app.all('', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../public', 'index.html'));
});

// start node server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App UI available http://localhost:${port}`);
  console.log(`Swagger UI available http://localhost:${port}/swagger/api-docs`);
});

// error handler for unmatched routes or api calls
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, '../public', '404.html'));
});

module.exports = app;
