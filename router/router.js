const express = require('express');
const router = express.Router();

// Define a route
router.get('/', (req, res) => {
    const data = {
        message: 'Home'
    };
    res.render('index', {data});
});

router.get('/contact', (req, res) => {
    const data = {
        message: 'Contact'
    };
    res.render('contact', {data});
});

router.get('/about', (req, res) => {
    const data = {
        message: 'About'
    };
    res.render('about', {data});
});

module.exports = router;