const userModel = require('./user.model')

exports.getUsers = (req, res, next) => {

    userModel
    .find()
    .then((users)=>res.status(200).json({
        count: users.length,
        users : users
    }))
    .catch((err) => {
        res.status(500).json({
            error: err
        })
    })
};

exports.getUsersbyfname = (req, res, next) => {
    userModel
    .find({$or: [{fname: 'gauri'}, {lname: 'jadhav'}]})
    .then((users)=>res.status(200).json({
        users : users,
    }))
    .catch((err) => {
        res.status(500).json({
            error: err
        })
    })
}

exports.getUsersbyId = (req, res, next) => {
  userModel
  .findById(req.params.id)
  .then((result) => {
     if(result) {
       res.status(200).json({
       result : result
  })}
     else{
        res.status(500).json({
            result : "User not found"
       })
     }
})
  .catch((err) => res.status(500).json({
    result : "User not found",
    error: err
  }))
}

exports.createUsers = (req, res, next) => {
    const newUser = new userModel({
        fname: req.body.fname,
        lname: req.body.lname
    });
    newUser
    .save()
    .then((result) => {
        res.status(201).json({
        user: result
    });
   
})
    .catch((err) => {
        res.status(500).json({
            error: err
        })
    })
}

exports.DeleteUsersbyId = (req, res, next) => {
    userModel
    .findByIdAndDelete(req.params.id)
    .then((result)=>{
        if(result) {
            res.status(200).json({msg: 'User deleted successfully'})
        }
        else{
            res.status(500).json({msg: 'User not found'})
        }
        }
      )
      .catch((err) => {res.status(500).json({
        error: "user not found", 
      })
      console.log(err);
    })
}