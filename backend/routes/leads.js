const express = require('express')
const router = express.Router()
const Lead = require('../models/lead')


//pushingleads
router.post('/push-lead/:employer' , async(req,res)=>{
    try{
        const lead = new Lead({
            seller : req.body.seller ,
            address : req.body.address ,
            ap : req.body.ap , 
            closingTimeline : req.body.closingTimeline , 
            reason : req.body.reason , 
            mv : req.body.mv , 
            condition : req.body.condition , 
            note : req.body.note ,
            datePushed : Date.now ,
            pusher : req.body.username ,
            client : req.params.employer
        })
        await lead.save()
        res.status(201).json({"A new lead was pushed"})
    }catch(err){
        res.json(err)
    }
})



module.exports = router;