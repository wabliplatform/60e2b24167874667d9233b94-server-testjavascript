
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const WabliWimageSchema = new Schema({
data:String , 
name:String 
});

module.exports = { WabliWimageSchema };

