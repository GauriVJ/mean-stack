const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fname: String,
    lname: String
});

module.exports = mongoose.model('User', userSchema);  

