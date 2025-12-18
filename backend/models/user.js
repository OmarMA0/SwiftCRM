const bcrypt = require('bcrypt');
const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username : {
       type : String,
       required : true , 
       trim : true,
       unique : true , 
       lowercase : true,
       minLength : 8,
       maxLength : 30,
    },
    password : {
       type : String,
       required : true , 
       trim : true,
       minLength : 10,
    },
    email : {
       type : String,
       required : true , 
       unique : true , 
       lowercase : true,
       trim : true,
       minLength : 8,
       maxLength : 50,
    },
    planId : {
      type : String,
      default : 'free',
    },
    avatar : {
      contentType : String,
      data : Buffer ,
    },
    role: {
    type: String,
    enum: ['admin', 'lead agency', 'acquisition manager' ,'client'],
    default : 'client'
    },
    employer: {
       type: String  ,       //mongoose.Schema.Types.ObjectId,
                              // ref: 'User',
       default: null  
    },
})
module.exports = mongoose.model('User' , userSchema)