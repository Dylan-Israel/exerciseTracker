//Model
//Require dependencies
const mongoose = require('mongoose');

//Create instance of Schema
const Schema = mongoose.Schema;

//Document Structure
const exerciseSchema = new Schema({
  userName:String,
  description: String,
  duration: Number,
  date: String
  },{timestamps:true});

const ModelClass = mongoose.model('exercise', exerciseSchema);
module.exports = ModelClass;
