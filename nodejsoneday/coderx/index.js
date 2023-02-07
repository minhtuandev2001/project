const express = require('express');
const cookieParser = require('cookie-parser');

// require router users
const usersRouter = require('./routers/user.route');
const authRouter = require('./routers/auth.route');

// khởi tạo ứng dụng thông qua phương thức express()
const app = express();
const port = 3000;

//từ Express 4.16.0 mặc định body parser đã được cấu hình sẵn trong file app.js
// sử dụng 2 middleware bên dưới để sử dụng req.body
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// sử dụng middleware cookie-parser để phân tích cookie
app.use(cookieParser()); // load middleware cookie parser
// static file 
app.use(express.static('public'));

// template engine
app.set('views', './views'); // folder chứa view
app.set('view engine', 'pug'); // khai báo template

// router handler
app.get('/', (req, res) => {
    res.render('index', { title: 'ex template' });
});

// middleware router
app.use('/users', usersRouter);
app.use('/auth', authRouter);

app.listen(port, () => {
    console.log('listening on port', port);
});