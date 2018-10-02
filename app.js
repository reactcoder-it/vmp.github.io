// Подключаем внешние библы
const express = require('express');
const fs = require('fs');
const path = require('path');

// Подключаем роуты
const index = require('./routes/index');
const jokes = require('./routes/jokes');
const blog = require('./routes/blog');

// Создаем экземпляр express
const app = express();

// Отключаем в ответе информацию об express
app.disable('x-powered-by');

// Устанавливаем в качестве шаблонизатора ejs
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// Устанавливаем директорию со статическими файлами
app.use(express.static(path.join(__dirname, '/assets')));

app.use('/', index);
app.use('/jokes', jokes);
app.use('/blog', blog);

// Отслеживаем 404 ошибку и перенаправляем в обработчик ошибок
app.use(function(req, res, next) {
  res.status(404);
  res.render('404');
});

// Обработчик ошибок
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error');
  console.log(err);
});

// Запускаем сервер
const port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log(`Сервер запущен! Порт ${port}`);
});
