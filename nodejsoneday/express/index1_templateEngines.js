// USING TEMPLATE ENGINES 
const express = require('express');

const app = express();
const port = 3000;

// template engines được sử dụng 
app.set('views', './views'); // thư mục chứa các template 
app.set('view engine', 'pug'); // use template engines

app.get('/', (req, res) => {
    res.render('index', {title: 'express new', value: 'minh tuan'});
})

app.listen(port, () => {
    console.log('listening on port', port);
});