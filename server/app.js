var express = require('express');
const mongoose = require('mongoose');
var usersRouter = require('./api/user/user.route');
var tasksRouter = require('./api/task/task.route');
var app = express();
require('dotenv').config;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
})
// password is yet to be protected   
app.use(express.json());
mongoose.connect("mongodb+srv://gvjadhav039:123Gaurijadhav@cluster0.lwkuhm4.mongodb.net/mydb?retryWrites=true&w=majority").then(() => {
  console.log('database connection established')
})
.catch((err) => {
  console.log(err);
  console.log('Error occured while connecting to mongo')
})
app.use('/users', usersRouter);
app.use('/tasks', tasksRouter);

app.listen(3000, () => {
  console.log('listening on http://localhost:3000');
});
