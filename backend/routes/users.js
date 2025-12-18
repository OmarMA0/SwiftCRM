const express = require('express')
const router = express.Router()
const User = require('../models/User')
const upload = require("../config/multer");

router.get('/', async(req,res)=>{
    try {
    const result = await User.find();
    res.send(result)
    //res.json(result); 
    
  }  catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
})
// Registering a new user
router.post('/' , async(req , res)=>{
    try {
  const user = new User({
    username : req.body.username ,
    password : req.body.password ,
    email : req.body.email ,
    planId : 'free'
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
// Register a new employee
router.post('/register-employee' , async(req , res)=>{
    try {
  const user = new User({
    username : req.body.username ,
    password : req.body.password ,
    email : req.body.email ,
    role : req.body.role,
    employer : req.body.employer,
    planId : 'free'
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
// To get the user trying to login
router.post('/login', async(req,res)=>{
    try {
    const [userfound] = await User.find({username : req.body.username}); //userfound is an object
      if(userfound){                                           //find() returns an array of objects
        if(userfound.password === req.body.password){
          res.send('success')
        }
        else{
          res.send('wrong password try again')
        }
      }else{
        res.send('no such username exists')
      }
    
  }  catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
})
//Get all my employees
router.get('/employees/:username', async (req, res) => {
  try {    
    const employees = await User.find({ 
      employer: req.params.username
    }).select('-password'); // Don't send passwords
    
    res.json({ employees });
    
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// uploading avatar image
router.post('/upload-avatar', upload.single("avatar") ,async(req,res)=>{  
  try{
    const [userfound] = await User.find({username : req.body.username})
    if(userfound){
    
    userfound.avatar = {
      data : req.file.buffer , 
      contentType : req.file.mimetype,
    }
    await userfound.save();
    res.status(200).json('success');
  }else {
    res.status(400).json('No user found')
  }
  }catch(err){
    res.status(500).json('Upload failed')
  }
})
// get the avatar image
router.get("/get-avatar/:username", async (req, res) => {
  try {
    const userfound = await User.findOne({
      username: req.params.username
    });

    if (!userfound) {
      return res.status(404).json({ error: "User not found" });
    }
    if (!userfound.avatar || !userfound.avatar.data) {
      return res.json({ avatar: null });
    }
    // reconverting the image
    const base64Image = userfound.avatar.data.toString('base64');
    const avatarUrl = `data:${userfound.avatar.contentType};base64,${base64Image}`;
    res.json({ avatar: avatarUrl });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
//Password Reset
router.patch('/reset-password/:username' , async(req,res)=>{
  try{
  const userfound = await User.findOne({ username : req.params.username})
   if (!userfound) {
      return res.status(404).json({ error: "User not found" });
    }
    if(userfound.password === req.body.oldpassword){
      userfound.password = req.body.newpassword
      await userfound.save()
      return res.status(200).json({message : 'The Password has been reset',
        body : userfound
      })
    }
    if (userfound.password !== req.body.oldpassword){
      res.status(200).json({ message : "Wrong Password"})
    }
  }catch(err){
    res.status(500).json({error : err})
  }
})
module.exports = router;