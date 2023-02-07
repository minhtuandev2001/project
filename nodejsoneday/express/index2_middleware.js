const express = require('express');

const app = express();
const port = 3000;

// create và gán middleware cho biến
// thêm thộc tính và đôi tượng req 
const requestTime = (req, res, next) => {
    var d = new Date();
    req.reqTime = d.getHours();
    next();
}

app.use(requestTime);

app.get('/', (req, res) => {
    let str = 'bây giờ là : ';
    str += req.reqTime + ' giờ' ;
    res.send(str);
})


app.listen(port, () => {
    console.log('listening on port ', port);
});