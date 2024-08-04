const mongoose = require('mongoose');

 
// Define the schema

const postschema = new mongoose.Schema({
  postData: String,
 user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
 
 },
  data:{
    type: Date,
    default: Date.now()
  }
});

module.exports=mongoose.model('post',postschema);