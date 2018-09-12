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

router.get('/:file', function(req, res, next) {

  fs.readFile(jokes_path + '/' + req.params.file, function(err, data) {
    if (err) return next();

    res.locals.data = data;

    res.render('joke');
  })
});

// Отслеживаем 404 ошибку и перенаправляем в обработчик ошибок
router.use(function(req, res, next) {
  res.status(404);
  res.render('404');
});

// Обработчик ошибок
router.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error');
  console.log(err);
});

module.exports = router;