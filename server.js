const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

const app = express();
const PORT = process.env.PORT || 3001;

// set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// jsut a middleware logger so we can keep track of our requests
app.use(logger('dev'));

// turn on routes
const routes = require('./routes');
app.use(routes);

// set up mongoose connection
// useNewUrlParser is something that mongoose requires --(boiler plate)
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/notetaker', { 
  useNewUrlParser: true
});

// tell mongoose to use the built in JS Promise object their promises
mongoose.Promise = Promise;

app.listen(PORT, () => console.log(`App now listening on https://localhost:${PORT}`))