// middleware , gán middleware cho biến , sử dụng middleware
const express = require('express');

const app = express();
const port = 3000 ;

// middleware được gán cho biến myLogger
const myLogger = function (req, res, next) {
    console.log('My Logger');
    next();
}
// để laod middleware app.use(), chỉ định middleware
// ví dụ đoạn mã này load middleware myLogger trước đường dẫn đến đường dẫn root
app.use(myLogger);

app.get('/', (req, res)=>{
    res.send('xin chao viet name');
})

app.listen(port, ()=> {
    console.log('listening on port ', port);
})