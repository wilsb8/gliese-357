const express = require('express');
const router = require('../router/router');
const path = require('path');

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);

/// Set the views directory
const viewsDir = path.join(__dirname, '..', 'views');
app.set('views', viewsDir);
console.log('Views directory:', viewsDir);

// Set the public directory
const publicDir = path.join(__dirname, '..', 'public');
app.use(express.static(publicDir));
console.log('Public directory:', publicDir);

// Use the router middleware
app.use('/', router);

module.exports = app;
