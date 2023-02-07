const shortid = require('shortid'); // tạo id không trùng lặp
// require module of project
const db = require('../db');

module.exports.index = (req, res) => {
    res.render('users/index', {
        title: 'user list',
        message: 'this is page user',
        list: db.get('users').value() // lấy dữ liệu ra
    });
}
module.exports.search = (req, res) => {
    var q = req.query.q;
    console.log(q);
    let dataUser = db.get('users').value();
    var match = dataUser.filter((users) => { return users.name.toLowerCase().indexOf(q.toLowerCase()) != -1 }); // ex2 :  một phần trùng 
    console.log(match);
    res.render('users/index', {
        title: 'user list search',
        message: 'result search ' + q,
        list: match,
        search: q
    });
    // ex1 : http://localhost:3000/users/search?q=John
    // ex2 : http://localhost:3000/users/search?q=t
}
module.exports.create = (req, res) => {
    console.log(req.cookies);
    res.render('users/create', {
        title: 'Create user'
    });
}
module.exports.postCreate = (req, res) => {
    req.body.id = shortid.generate(); // tạo id 
    console.log(res.locals.success);
    db.get('users')
        .push(req.body)
        .write()
    // redirect ==> users
    res.redirect('/users')
}
module.exports.get = (req, res) => {
    let id = req.params.id; // dữ liệu này luôn là string
    console.log(typeof id);
    // get information about user
    let info = db.get('users').find({ id: id }).value()
    console.log(info);
    res.render('users/view',
        {
            title: 'Information user',
            message: info.name,
            user: info
        });
}

// module.exports = {
//     a: 1, bb: 2
// }
// // <==>
// module.exports.a = 1;
// module.exports.b = 2;