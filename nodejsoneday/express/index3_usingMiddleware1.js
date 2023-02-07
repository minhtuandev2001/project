// USING ERROR-HANDLING MIDDLEWARE
// sử dụng middleware error-handling để xử lý lỗi
// xử lý lỗi theo path nhất định và , luôn luôn xử lý
const express = require('express');
const app = express();

const port = 3000;

// route handle
app.get('/user/info',(req,res, next) => {
    console.log('loi');
    next('hãy để trong này : object error');
})
// middleware error-handling thực hiện với path 
// app.use('/user/info',(err, req, res, next) => {
//     console.log(err);
//     res.status(500).send(err);
// })
// middleware error-handling luôn luôn kích hoạt khi lỗi xãy ra 
app.use((err, req, res, next) => {
    console.log('nếu có lỗi thì chạy');
    res.send(err);
    console.log(err);
})

app.listen(port, () => {
    console.log('listening on port', port);
})