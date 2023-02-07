// require module of project
const db = require('../db');

module.exports.login = (req, res) => {
    res.render('auth/login',{
        title : "Login"
    })
}
module.exports.postLogin = (req, res) => {
    let email = req.body.email ;
    let password = req.body.password ;
    // cách cùi bắp 
    // let dataUser = db.get('users').value();
    // console.log(typeof dataUser);
    // let match = dataUser.filter((users) => users.email === email && users.password === password);
    // console.log(match.length > 0);
    // cách vip
    let user = db.get('users').find({email : email}).value();
    let error = [];
    if(!user){
        error.push("Nguoi dung khong ton tai" );
        res.render('auth/login', {
            title : "Login",
            errors: error,
            values: req.body
        });
        return;
    }
    if(user.password !== password){
        error.push("Mật khẩu sai !!! 😢" );
        res.render('auth/login', {
            title : "Login",
            errors: error,
            values: req.body
        });
        return;
    }
    res.redirect('/users'); // llý do vì sao dùng redirect 
    // console.log(req.body);
}