var express = require('express');
var router = express.Router();
const userController = require('./user.controller')

router.get('/', userController.getUsers);
router.get('/fname', userController.getUsersbyfname);
router.get('/:id', userController.getUsersbyId);
router.post('/', userController.createUsers);
router.delete('/:id', userController.DeleteUsersbyId);

module.exports = router;
