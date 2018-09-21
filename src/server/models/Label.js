const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LabelSchema = new Schema({
    labelText:String,
    pos:[{x:Number, y:Number}],
    textColor:String
},{collection:'labels',versionKey:false});

module.exports = Label = mongoose.model('Label', LabelSchema,'labels');