const  mongoose  = require('mongoose')
const  Schema    = mongoose.Schema

const productSchema = Schema({
    title:{
        type    : String,
        required: true,
        unique  : true
    },
    desc:{
        type    : String,
        required: true 
    },
    image:{
        type    : String,
        required: true 
    },
    brand:{
        type: String
    },
    category:{
        type    : String,
        required: true 
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
},{timestamps: true})

module.exports  = mongoose.model('Product',productSchema)