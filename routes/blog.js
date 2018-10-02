const express = require('express');
const fs = require('fs');

const router = express.Router();

const texts_path = './texts';

router.get('/', function (req, res) {
  fs.readdir(texts_path, function(err, files) {
    res.render('blog', {
      files: files,
      title: "Блог",
      jokes: false
    });
  });
});

router.get('/:file', function (req, res, next) {
  fs.readFile(texts_path + '/' + req.params.file, function (err, data) {
    if (err) return next();
    res.render('joke', {
      data: data
    });
  });
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