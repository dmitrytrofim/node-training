const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname + '/public')));
app.use(express.json());

app.use('/about', (req, res) => {
 res.render('about');
});
app.post('/test', function (req, res) {
 //req.body содержит данные, переданные от клиента
 res.json(req.body.message + ' from Server!');
});
app.use('/', (req, res) => {
 res.render('index');
});

app.listen(port);
