var express = require('express');
var usersRouter = require('./api/user/user.route');
var tasksRouter = require('./api/task/task.route');

var app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  next();
})

app.use(express.json());
app.use('/users', usersRouter);
app.use('/tasks', tasksRouter);

app.listen(3000, () => {
  console.log('listening on http://localhost:3000');
});
