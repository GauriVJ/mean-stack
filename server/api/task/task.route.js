var express = require('express');
var router = express.Router();
const taskController = require('./task.controller')

router.get('/', taskController.getTasks);

module.exports = router;
