const mongoose = require('mongoose')
const leadSchema = new mongoose.Schema({
    seller : {
        type : String,
        required : true,
    },
    address : {
        type : String,
        required : true,
        minLength : 10,
        maxLength : 50,
    },
    ap : {
        type : Number,
        min : 0,
    },
    closingTimeline : {
        type : Number,
        min :0,
    },
    reason : {
        type : String,
        minLength : 3,
    },
    mv : {
        type : Number,
        min : 0,
    },
    condition : {
        type : String,
    },
    note : {
        type : String,
    },
    datePushed : {
        type : Date ,
        default : Date.now ,
    },
    pusher : {
        type : String,
        required : true,
    },
    client : {
        type : String,
        required : true,

    }

})
module.exports = mongoose.model('Lead' , leadSchema)