const express = require('express')
const router = express.Router()
const Lead = require('../models/lead')


//pushingleads
router.post('/push-lead/:employer' , async(req,res)=>{
    try{
        const lead = new Lead({
            seller : req.body.seller ,
            address : req.body.address ,
            ap : parseMoney(req.body.ap) , 
            closingTimeline : parseMoney(req.body.closingTimeline) , 
            reason : req.body.reason , 
            mv : parseMoney(req.body.mv) , 
            condition : req.body.condition , 
            note : req.body.note ,
            pusher : req.body.pusher ,
            datePushed : Date.now() , 
            phone : req.body.phone,
            client : req.params.employer,
            status : 'new lead',
            activity : 'active'
        })
        await lead.save()
        res.status(201).json("A new lead was pushed")
    }catch(err){
        res.json(err)
    }
})
router.patch('/set-contactor/:_id' , async(req,res)=>{
    try{
        const leadfound = await Lead.findOne({_id : req.params._id})
        if (!leadfound) {
      return res.status(404).json({ error: "Lead not found" });
    }
    leadfound.contactor  = req.body.username 
    await leadfound.save()
    res.status(200).json({message : `lead ${req.params._id} has been added to ${req.body.username}`})
    }catch(err){
        return res.status(400).json({error : err})
    }
})
router.get('/get-leads/:employer' , async(req,res)=>{
    try {
        const leads = await Lead.find({
            client : req.params.employer
        })
        res.json({leads : leads})
    }catch(err){
        res.json({error : err})
    }
})
function parseMoney(val) {
  if (!val) return 0
  return Number(val.replace(/[^0-9]/g, '')) //this will replace any character that is not a number
}

module.exports = router ;