const express = require('express');

// Import modular routers for
const apiRouter = require('./api')

const app = express();

app.use('./api', apiRouter);

module.exports = app;