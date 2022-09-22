const mongoose  = require('mongoose')
const Schema    = mongoose.Schema

const productCategorySchema = Schema({
     name:{
        type     : String,
        required : true,
        unique   : true
     },
   
     status:{
        type: Boolean,
        default: true
     }
     
},{timestamps: true})

module.exports  = mongoose.model('ProductCategory', productCategorySchema)