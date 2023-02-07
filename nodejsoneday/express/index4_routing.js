// xử lý yêu cầu (router handler)
const express = require('express');

const app = express();
const port = 3000;

// nhiều hàm gọi lại có thể xử lý một tuyến đường , đảm bảo bạn chỉ định next 
app.get('/', (req, res, next) => {
    console.log('phản hòi sẽ được gọi trong next() ')
    next(); // dùng để gọi middleware tiếp theo
}, (req, res) => {
    res.send('hello chao cac ban');
})

// một mảng các hàm gọi lại để xử lý 1 tuyến đường  
const cb0 = (req, res, next) => {
    console.log('cb0');
    console.log(req.url)
    next();
}
const cb1 = (req, res, next) => {
    console.log('cb1');
    next();
}
const cb2 = (req, res) => {
    res.send('hello chao cb2');
    console.log(req.url)
}
app.get('/example', [cb0, cb1, cb2])

// sự kết hợp của hàm độc lập và mảng các hàm có thể xử lý một tuyến đường 
const cd0 = (req, res, next) => {
    console.log('cd0');
    next();
}
const cd1 = (req, res, next) => {
    console.log('cd1');
    next();
}

app.get('/example/d', [cd0, cd1], (req, res, next) => {
    console.log('qua function tiep theo');
    next();
}, (req, res) => {
    res.send('xin chao toi la D!, nhớ xem terminal nữa');
})
app.listen(3000, () => {
    console.log('listening on port ' + port);
})