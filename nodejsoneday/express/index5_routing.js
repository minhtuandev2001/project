
/*
tạo trình xử lý tuyến đường có thể phân phối 
cho một đường dẫn tuyến  ví dụ /book ()
trong đó có cả get , post, put ...
*/
const express = require('express');

const app = express();
const port = 3000;

app.route('/book')
    .get((req, res) => {
        res.send('danh sach book');
    })
    .post((req, res) => {
        res.send('add 1 quyển sách');
    })
    .put((req, res) => {
        res.send('update lại thông tin sách');
    })
    .delete((req, res) => {
        res.send('delete thành công 1 quyển sách ');
    })

app.listen(port, () => {
    console.log('listening on port ' + port);
})