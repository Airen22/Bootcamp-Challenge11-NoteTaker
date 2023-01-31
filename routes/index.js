const express = require('express');

// Import modular routers for
const apiRouter = require('./notes')

const app = express();

app.use('./notes', apiRouter);

module.exports = app;