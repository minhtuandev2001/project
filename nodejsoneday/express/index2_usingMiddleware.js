// USING MIDDLEWARE ROUTER-LEVEL
const express = require('express');
const app = express();
const router = express.Router();

const port = 3000;

// middleware không có path, thực thi cho mọi req tới router
router.use((req, res, next) => {
    var d = new Date();
    console.log('Time now : ', d.getHours());
    next();
})

// sub-stack middleware hiển thị thông tin req cho bất kì loại req HTTP nào
router.use('/user/:userId', (req, res, next) => {
    console.log('Request URL : ', req.originalUrl);
    next();
}, (req, res) => {
    console.log('Method : ', req.method);
    next();
})

/* middleware sub-stack xử lý req GET , nếu if đúng thì chuyển đến route(tuyến đường )
tiếp theo có cùng path , nếu không có tuyến đường nào cùng path thì vẫn thực hiện Middleware tiếp theo
*/
router.get('/users/:id', (req, res, next) => {
    // nếu id == 0 thì bỏ qua middleware tiếp theo và nhảy tới router(bộ định tuyến) có cùng path
    if (req.params.id == 0) next('route');
    else next();
}, (req, res) => { // <== middleware tiếp theo
    // res.send('chao người bình thường !');
    console.log('trang bình thường ' + req.params.id);
})
// (*)
router.get('/users/:id', (req, res) => {
    // res.send('chao nguoi dac biet , id : ' + req.params.id);
    console.log('trang đặc biệt ' + req.params.id);
})
// khai báo middleware 
app.use(router);

app.listen(port, () => {
    console.log('listening on port ' + port);
});