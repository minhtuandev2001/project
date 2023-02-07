// làm quen với routing , các loại method
const express = require('express');

const app = express();
const port = 3000 ;

// router
// app.METHOD(path, handler)
app.get('/', (req, res) => { // only get
    res.send("su dung method get");
})
app.post('/', (req, res) => { // only post
    res.send("su dung method post");
})

app.all('/about', (req, res,next) => {
    res.send("tat ca cac method deu truy cap duoc");
    next();
})
app.listen(port, ()=> {
    console.log('listening on port ' + port);
});