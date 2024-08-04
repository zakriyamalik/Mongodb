const mongoose = require('mongoose');

// Connect to MongoDB

mongoose.connect("mongodb://127.0.0.1:27017/testingthedatabase");
 
// Define the schema

const Userschema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  posts:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'post'  // reference to Post model
  }]
});

module.exports=mongoose.model('user',Userschema);