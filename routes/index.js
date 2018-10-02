const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.render('index');
});

router.get('/projects', function (req, res) {
    res.render('projects');
});

module.exports = router;