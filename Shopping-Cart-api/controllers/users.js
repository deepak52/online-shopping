const User = require('../models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
exports.user_signup = (req, res, next) => {
    User
    .find({username: req.body.username})
    .exec()
    .then( user => {
        if (user.length >=1 ) {
            res.status(422).json({
                message: "Mail Exists"
            })
        } else {
            console.log("inside")
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if(err) {
                    res.status(500).json({
                        message: err
                    })
                } else {
                    const user = new User({
                        _id: mongoose.Types.ObjectId(),
                        username: req.body.username,
                        password: hash,
                        firstName:req.body.firstName,
                        lastName:req.body.lastName,
                    });
                    user
                    .save()
                    .then( result => {
                        res.status(201).json({
                            message: 'User Created',
                            username: result.username
                        })
                        
                    })
                    .catch( error => {
                        res.status(500).json({
                            message: error
                        })
                    })
                }
            }); 
        }
    })
}

exports.user_login = (req, res, next) => {
    console.log(req.body);
    User
    .find({username: req.body.username})
    .exec()
    .then( user => {
        if(user.length < 1) {
            
            res.status(401).json({
                message: "Auth failed as mail id doesnt match"
            })
        }
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
            if(result) { 
                const token = jwt.sign({
                    username : user[0].username,
                    userId : user[0]._id,

                }, 
                'secret',
                {
                    expiresIn : '1h', 
                }
                );
                
                return res.status(200).json({
                    message: 'Auth Successful',
                    userid: user[0]._id,
                    firstName:user[0].firstName,
                    lastName:user[0].lastName,
                    token,
                })
            } else {
                return res.status(401).json({
                    message: 'Auth failed'
                })
            }
        })
    })
   
}

exports.user_delete = (req, res, next) => {
    console.log("The user to be deleted is " + req.params.userId);
    User
    .remove({_id: req.params.userId})
    .exec()
    .then( result => {
        result.status(200).json({
            message: "User Deleted"
        })
    })
    .catch( err => {
        res.status(500).json({
            message: error,
        })
    })
}  