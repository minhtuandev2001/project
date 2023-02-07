const express = require('express');

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');
app.get('/', (req, res) => {
    res.render('index5', 
    {
        title: 'nodejs one day',
        message: 'dang cap'
    })
});

app.listen(3000, ()=> {
    console.log('listening on port 3000...')
})