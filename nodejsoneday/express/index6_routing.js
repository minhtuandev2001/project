// tạo module và sử dụng module trình xử lý tuyến đường
const bird = require('./router/index6_routing');
const express = require('express');

const app = express();
const port = 3000;

app.use('/birds',bird);

app.listen(port, ()=> {
    console.log('listening on port ', port);
});