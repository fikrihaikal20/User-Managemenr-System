const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name:  {
    type: String,
    required : true,
    minLength: 5,
    maxLength: 225
}, 
  email: {
    type: String,
    required : true,
    lowercase: true
},
  gender: {
    type: String,
    required : true,
    enum: ['male','female']
}, 
  status : {
    type: String,
    required : true,
    enum: ['active','nonactive']
},
  CreatedAt : {
    type: Date,
    immutable : true,
    default: Date.now()
},
  UpdatedAt : {
    type: Date,
    default: Date.now()
},
});

module.exports = mongoose.model('user', userSchema)