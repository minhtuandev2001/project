const express = require('express');
const router = express.Router();

// middleware giành riêng cho bộ định tuyến này
router.use((req, res, next) => {
    console.log('Time now: ' + Date.now());
    next();
})
// xác định lộ trình trang home
router.get('/', (req, res) => {
    res.send('this is page home');
})

// xác định lộ trình trang about
router.get('/about', (req, res) => {
    res.send('this is about page');
})

module.exports = router;