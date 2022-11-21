
const { WabliWimageSchema } =require('./WabliWimage');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wabliSchema = new Schema({
Underscoreid:String , 


wimage:  
WabliWimageSchema
 , 


wtitle:String 



})

module.exports = {
  Wabli : mongoose.model('wabli', wabliSchema),
}

