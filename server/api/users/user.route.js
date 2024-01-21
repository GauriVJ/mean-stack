var express = require('express');
var router = express.Router();
const userController = require('./user.controller')

router.post('/register',userController.registerUser);
router.post('/login',userController.loginUser);
router.get('/', userController.getUsers)
module.exports = router;