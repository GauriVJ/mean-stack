const userModel = require('./user.model')

exports.registerUser = async (req, res, next) => {
   
   try{
    const registeredUser = await userModel

    .findOne({ email: req.body.email});
    if (registeredUser) {
        return res.status(422).json({
            message: "Already registered"
        })
    } else{
        const newUser = new userModel({
            email: req.body.email,
            password: req.body.password
        });
        const result = await newUser.save();
        res.status(200).json({
            msg: "User registered successfully"
        })
    }
} catch (err) {
    res.status(500).json({
        error: err
    });
}
}

    
exports.loginUser = async (req, res, next) => {
   try{
    const loggedInUser = await  userModel
    .findOne({email: req.body.email, password: req.body.password})
    if (loggedInUser) {
        return res.status(422).json({
            message: "Login successful"
        })
    }
    else{
        return res.status(422).json({
            message: "User not found"
        })
    }
   } catch (error){
    res.status(500).json({
        error: err
    })
   }
}
//     userModel
//     .find({email: req.body.email, password: req.body.password})
//     .then((users) => {
//         if(users.length < 1) {
//             return res.status(422).json({
//                 message: "User not found"
//             })
//         }
//         res.status(200).json({
//             result: "Login successful"
//         })
//     })
//     .catch((err) => res.status(500).json({
//         result : "User not found",
//         error: err
//       }))
// }

exports.getUsers = (req, res, next) => {
    userModel
    .find()
    .then((users) => res.status(200).json({
        count: users.length,
        users : users
    }))
    .catch((err) => {
        res.status(500).json({
            error: err
        })
    })
}