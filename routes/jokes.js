const express = require('express');
const fs = require('fs');

const router = express.Router();

const jokes_path = './jokes';

router.get('/', function(req, res) {
    fs.readdir(jokes_path, function(err, files) {

        res.locals.jokes = true;
        res.locals.files = files;
        res.locals.title = "Программерский юмор",

        res.render('jokes');
    });
});

router.get('/:file', function(req, res) {
    fs.readFile(jokes_path + '/' + req.params.file, function(err, data) {
        if (err) throw err;

        res.locals.data = data;

        res.render('joke');
    })
});

module.exports = router;