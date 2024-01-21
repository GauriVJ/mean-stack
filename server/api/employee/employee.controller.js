const employeeModel = require('./employee.model')

exports.getemployee = (req, res, next) => {

    employeeModel
    .find()
    .then((employee)=>res.status(200).json({
        count: employee.length,
        employee : employee
    }))
    .catch((err) => {
        res.status(500).json({
            error: err
        })
    })
};

exports.getemployeebyfname = (req, res, next) => {
    employeeModel
    .find({$or: [{fname: 'gauri'}, {lname: 'jadhav'}]})
    .then((employee)=>res.status(200).json({
        employee : employee,
    }))
    .catch((err) => {
        res.status(500).json({
            error: err
        })
    })
}

exports.getemployeebyId = (req, res, next) => {
    employeeModel
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

exports.createemployee = (req, res, next) => {
    const newemployee = new employeeModel({
        fname: req.body.fname,
        lname: req.body.lname
    });
    newemployee
    .save()
    .then((result) => {
        res.status(201).json({
            employee: result
    });
   
})
    .catch((err) => {
        res.status(500).json({
            error: err
        })
    })
}

exports.DeleteemployeebyId = (req, res, next) => {
    employeeModel
    .findByIdAndDelete(req.params.id)
    .then((result)=>{
        if(result) {
            res.status(200).json({msg: 'employee deleted successfully'})
        }
        else{
            res.status(500).json({msg: 'employee not found'})
        }
        }
      )
      .catch((err) => {res.status(500).json({
        error: "user not found", 
      })
      console.log(err);
    })
}

exports.Updateemployee = (req, res, next) => {
    employeeModel
    .updateOne({ _id: req.params.id }, {$set: {"fname": req.body.fname, "lname": req.body.lname}})
    .then( res.status(200).json({
        message: "Updated an object successfully"})
        )
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
      })
}