const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ObjectID = require('mongodb').ObjectID;
const config = require('../');
const User = require('../models/User');


mongoose.connect('mongodb://admin:'+config.dbCreds+'@ds261302.mlab.com:61302/scumrp').then(()=> console.log('MongoDB connected...')).catch(err => console.log(err));;
var db = mongoose.connection;
db.on('error',function(err){
    console.log(err);
});


router.post('/register',(req,res) =>{
    console.log("test " + req.body.username);
    var userInfo = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        salt: null,
        passwordHash:null
    });
    
    User.findOne({'username':userInfo.username},function(err,doc){
        console.log(doc);
        if(err)
        {
            console.log(err);
        }
        else if(doc != null){
            console.log(doc.username + " BLIN");
            if(doc.username == userInfo.username)
             {
                 console.log("This Email or Username is already used");
                 res.send("Email is already in use!");
             }
        } else if (doc == null){
            console.log("No email found, proceed");
            passwordData = encryption.saltHashPassword(userInfo.password);
            userInfo.salt = passwordData.salt;
            userInfo.passwordHash = passwordData.passwordHash;
            console.log(passwordData.passwordHash + ' Salt: ' + passwordData.salt);
    
            passwordData2 = encryption.sha512(userInfo.password, userInfo.salt);
            userInfo.password = "This isn't the password you are looking for! *Jedi mind trick hand motion*"
            console.log(passwordData2.passwordHash);
    
            userInfo.save();

        }
    });
});


router.post('/login',(req,res)=>{
    var userInfo = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        salt: null,
        passwordHash:null
    });
    User.findOne({'username':userInfo.username},function(err,doc){
        if(err){
            console.log(err);
        }else if(doc == null){
            console.log("Username not found");
            res.status(300).send({redirect:"/register"});
        }else{
            var valid = encryption.validateHash(userInfo.password, doc.salt, doc.passwordHash);
            if(valid == true){
                jwtData = {
                    id: doc._id
                }
                token = encryption.generateJWT(jwtData, config.jwtSecret);
                //console.log(valid);
                res.status(200).send({username:userInfo.username, auth: true, token: token });
            }
            else{
                res.redirect();
            }
        }
    });
    console.log("Login attempt: " + userInfo.username);

});


    module.exports = router;

