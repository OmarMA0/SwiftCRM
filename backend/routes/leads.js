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
router.get('/get-leads/:employer' , async(req,res)=>{
    try {
        const leads = await Lead.find({
            employer : req.params.employer
        })
        res.json(leads)
    }catch(err){
        res.json(err)
    }
})
function parseMoney(val) {
  if (!val) return 0
  return Number(val.replace(/[^0-9]/g, '')) //this will replace any character that is not a number
}

module.exports = router ;