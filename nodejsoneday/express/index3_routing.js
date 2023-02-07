// Tham số trong routing
const express = require('express');

const app = express();
const port = 3000;

//routing 
// Router parameters
// tên của tham số phải được tạo thành từ ([A-Za-z0-9_])
app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params)
})
// dấu (-), (.) dùng để nối nhiều tham số với nhau
/*ví dụ
plantae : cây thuộc họ thực vật
genus : chi
species : loài
*/
app.get('/plantae/:genus.:species', (req, res) => {
    res.send(req.params);
    /*đường dãn ví dụ : plantae/cogai.hoahong
    result :{
                "genus": "cogai",
                "species": "hoahong"
            }*/
})

app.get('/flights/:from-:to', (req, res) => {
    res.send(req.params);
    /*
    đường dẫn ví dụ : flights/saigon-HCM
    result: {
                "from": "saigon",
                "to": "HCM"
            }
    */
})

// kiểm soát tham số một cách chính xác hơn , sử dụng regular expression 
app.get('/user/:userId(\\d+)', (req, res) => {
    res.send(req.params);
    /*số bất kì , xuất hiện nhiều lần cx được*/
    /* bởi vì biểu thức chính thường là một phần của chuỗi ký tự , thoát khỏi bằng cách thêm \
    đường dẫn ví dụ : user/:userID(\\d+)
    */
})
app.listen(port, () => {
    console.log('listening on port ' + port);
})