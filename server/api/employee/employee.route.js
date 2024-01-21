var express = require('express');
var router = express.Router();
const employeeController = require('./employee.controller')

router.get('/', employeeController.getemployee);
router.get('/fname', employeeController.getemployeebyfname);
router.get('/:id', employeeController.getemployeebyId);
router.post('/', employeeController.createemployee);
router.delete('/:id', employeeController.DeleteemployeebyId);
router.put('/:id', employeeController.Updateemployee)
module.exports = router;
