const mongoose = require('mongoose')
const phoneRegex = /^(?:\+1\s?)?(?:\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/;
const leadSchema = new mongoose.Schema({
    seller : {
        type : String,
        required : true,
    },
    address : {
        type : String,
        required : true,
        minLength : 10,
        maxLength : 100,
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
    },
    pusher : {
        type : String,
        required : true,
    },
    client : {
        type : String,
        required : true,

    },
    phone: {
    type: String,
    required: true,
    validate: {
      validator: (val) => phoneRegex.test(val),
      message: props => `${props.value} is not a valid US phone number!`
    }
  },
  status : {
    type : String,
    enum : ['new lead','cold' , 'warm' , 'hot' ,'not answering' , 'negotiating' ,'deal in pipeline' , 'deal']
  },
  activity : {
    type : String , 
    enum : ['active' , 'passive'] , 
    default : 'active'
  },
  contactor : {
    type : String,
  }

})
module.exports = mongoose.model('Lead' , leadSchema)