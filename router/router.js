const express = require('express');
const router = express.Router();

// Define a route
router.get('/', (req, res) => {
    res.render('index');
});

module.exports = router;