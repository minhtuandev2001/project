const request = require('request');

request('https://www.google.com', (err, res, body) => {
    console.log(body);
});