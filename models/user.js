//Model
//Require dependencies
const mongoose = require('mongoose');
//Create instance of Schema
const Schema = mongoose.Schema;
//Document Structure
const userSchema = new Schema(
    {userName:String},{timestamps:true}
);
const ModelClass = mongoose.model('user', userSchema);
module.exports = ModelClass;