const express = require('express');
const port = 5500;

const app = express();
app.use(express.static('static'));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(port);