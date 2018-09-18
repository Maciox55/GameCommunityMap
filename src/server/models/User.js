const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username:String,
    salt:String,
    passwordHash:String,
    role:[{type:String}]
},{collection:'users',versionKey:false});

module.exports = User = mongoose.model('User', UserSchema,'users');