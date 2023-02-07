// Using middleware application-level
const express = require('express');

const app = express();
const port = 3000;

// middleware này không có path , hàng được thực thi mỗi khi ứng dụng nhận được req
app.use((req, res, next) => {
    console.log('Time : ', Date.now());
    next();
})

// middleware được gắn trên path user/:userId , thực thi cho bất kì loại yêu cầu HTTP trên path
app.use('/user/:userId', (req, res) => {
    res.send('userId: ' + req.params.userId);
})

// middleware này xử lý các req GET với path (student/:studentId)
app.get('/student/:studentId', (req, res) => {
    res.send('studentId : ' + req.params.studentId);
})

// load nhiều middleware tại một điểm với một path , minh họa một stack để in URL , METHOD
app.use('/book/:bookId', (req, res, next) => {
    console.log('Request URL : ' + req.originalUrl);
    next();
}, (req, res, next) => {
    console.log('Request Type: ' + req.method);
    res.send('danh sach book')
    next();
})

// xác định nhiều router cho cùng 1 path , vd : tuyến thứ 2 sẽ không được gọi nếu tuyến đầu kết thúc req-res
app.get('/about/:aboutId', (req, res, next) => {
    // if aboutId == 0 , next ROUTER
    /* nhập id = 0 hoặc != 0 để biết result */
    if (req.params.aboutId == 0) next('route'); // nhảy đến tuyến đường khác 
    else next();
}, (req, res) => {
    res.send('router 2 được dùng');
})

// (*)
app.get('/about/:aboutId', (req, res, next) => {
    res.send('special');
})

// sử dụng nhiều middleware để xử lý các req đến path
const logOriginalUrl = (req, res, next) => {
    console.log('Original URL: ' + req.originalUrl);
    next();
}
const logMethods = (req, res, next) => {
    console.log('Method Type: ' + req.method);
    next();
}
const logStuff = [logOriginalUrl, logMethods];
app.get('/contacts/:id', logStuff, (req, res) => {
    res.send('contact info !');
})


app.listen(port, () => {
    console.log('listening on port ' + port);
});