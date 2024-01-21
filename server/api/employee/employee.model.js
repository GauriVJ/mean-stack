const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    fname: String,
    lname: String
});

module.exports = mongoose.model('Employee', employeeSchema);  

