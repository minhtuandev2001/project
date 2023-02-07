// các loại đường dẫn trong routing
const express = require('express');

const app = express();
const port = 3000;

// routing
// ==> string path 
app.get('/', (req, res) => {
    res.send('root');
});

app.get('/about', (req, res) => {
    res.send('about');
});

app.get('/random.text', (req, res) => {
    res.send('random.text');
})

// ==> string patterns
app.get('/ef?gh', (req, res) => {
    res.send('string pattern "ef?gh", khớp với egh , efgh ');
})

app.get('/ab+cd',(req, res)=>{
    res.send('string pattern "ab+cd", khớp với abcd, abbcd, abbbcd, ab(rất nhiều chữ b ở đây )cd ')
})

app.get('/ef*ghi', (req, res) => {
    res.send('string pattern "ef*ghi", khớp với efghi , ef(gì cũng được)ghi ');
})

app.get('/ab(cd)?e', (req, res) => {
    res.send('string pattern "ab(cd)?e" , khớp với abe, abcde ')
})

// path regular expressions
app.get(/a/, (req, res) => {
    res.send('/a/ , khớp với mọi đường dẫn có chữ a');
    // ví dụ : aihnafiauwef
})

app.get(/.*fly$/, (req, res) => {
    res.send('khớp với dragonfly, butterfly, không khớp với dragonflyman , butterflyman')
})

// 
app.listen(port, () => {
    console.log('listening on port' + port);
});