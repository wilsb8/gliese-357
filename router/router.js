const express = require('express');
const router = express.Router();

// Define a route
router.get('/', (req, res) => {
    res.render('index');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;