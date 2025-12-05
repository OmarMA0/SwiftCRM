const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get('/', async(req,res)=>{
    try {
    const result = await User.find();
    res.send(result)
    //res.json(result); 
    
  }  catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
})

router.post('/' , async(req , res)=>{
    try {
  const user = new User({
    username : req.body.username ,
    password : req.body.password ,
    email : req.body.email ,
    planId : String
  })
  await user.save()
  res.status(201).json(user)
} catch(err){
  if (err.code === 11000) {
      // Send a more specific error for duplicate username/email
      return res.status(409).json({ message: "Username or Email already exists." });
    }
    // If it's a Mongoose validation error (e.g., minLength violation)
    if (err.name === 'ValidationError') {
      return res.status(400).json({ message: err.message });
    }
    // General internal server error
    res.status(500).json({ message: "Internal server error x0x0" });
}
})


module.exports = router;