const express = require('express');
const fs = require('fs');

const router = express.Router();

const texts_path = './texts';

router.get('/', function (req, res) {
    fs.readdir(texts_path, function(err, files) {
        res.render('jokes', {
            files: files,
            title: "Блог",
            jokes: false
        });
    });
});

router.get('/:file', function (req, res) {
    fs.readFile(texts_path + '/' + req.params.file, function (err, data) {
        if (err) throw err;
        res.render('joke', {
            data: data
        });
    });
});

module.exports = router;