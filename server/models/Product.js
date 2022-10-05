const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const productSchema = new Schema ({
    title:{
        type    : String,
               
    },
    desc:{ 
        type    : String,
    
    },
    image:{
        type    : String,
       
    },
    brand:{
        type: String
    },
    category:{
        type    : String,
       
    },
    type:{
         type: String
    },
    size:{ 
        type    : Array,
        
    },
    color:{
        type    : Array,
        
    },
    price:{
        type    : Number,
        required: true
    },
   
    status:{
        type   : Boolean,
        default: true
    }
},{timestamps:true})

module.exports  = mongoose.model('Product',productSchema)