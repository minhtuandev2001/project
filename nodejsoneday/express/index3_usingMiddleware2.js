// USING ERROR-HANDLING MIDDLEWARE
// error-handling bằng trình xử lý lỗi mặc định do express cung cấp
const express = require('express');

const app = express();
const port = 3000;

// route handler
app.get('/product', (req, res) => {
    let error = new Error('bad request');
    error.statusCode = 404;
    throw error;
})

app.listen(port, () => {
    console.log('listening on port ' + port);
});