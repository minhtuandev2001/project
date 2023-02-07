const express = require('express');
const router = express.Router(); // tạo trình xử lý tuyến đường

const controller = require('../controllers/user.controller');
const validate = require('../validates/user.validate');

router.get('/', controller.index);

router.get('/cookie', (req, res) => {
    res.cookie('usersName', 'bui minh tuan');
    res.send('hello');
})
router.get('/search', controller.search)
router.get('/create', controller.create)
router.post('/create', validate.postCreate, controller.postCreate)
// dynamic routing
router.get('/:id', controller.get)

module.exports = router;