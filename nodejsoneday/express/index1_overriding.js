// OVERRIDING THE EXPRESS API
const express = require('express');

const app = express();
const port = 3000;

//Overriding the Express API
// app.response.sendStatus = (statusCode, type, message) => {
//     return this.contentType(type).status(statusCode).send(message)
// }

app.get('/', (req, res) => {
    // res.sendStatus(404, 'application/json', '{"error": "not found"}');
    res.sendStatus(500);
})


app.listen(port, () => {
    console.log('listening on port', port);
});