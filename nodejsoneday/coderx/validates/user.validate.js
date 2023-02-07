module.exports.postCreate = (req, res, next) => {
    var error = [];
    // Add a post
    if (!req.body.name) {
        error.push('name is required');
    }
    if (!req.body.email) {
        error.push('email is required');
    }
    if (!req.body.phone) {
        error.push('phone is required');
    }
    if (!req.body.from) {
        error.push('from is required');
    }
    if (error.length > 0) {
        res.render('users/create', {
            title: 'Create user',
            errors: error,
            values: req.body
        });
        return;
    }
    res.locals.success = true;
    next();
}