const express = require('express');

const app = express();

app.get('/student', (req, res) => {
    res.send("danh sach sinh vien truong V")
})
app.get('/manager', (req, res) => {
    res.send("trang dao tao cua truong v")
})
app.get('/book', (req, res) => {
    res.send("danh sach cac dau sach lap trinh truong V")
})
app.get('/', (req, res) => {
    res.send("chao mung ban den voi chung toi")
})

app.listen(3000,()=>{
    console.log("listening on port 3000...")
})