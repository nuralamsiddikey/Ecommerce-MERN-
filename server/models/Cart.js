const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const cartSchema = Schema({
    userId:{
        type    : String,
        required: true
    },
    product:[
        {
            productId: {
                type: String
            },
            amount:{
                type: Number,
                default: 1
            }
        }
    ]
},{timestamps: true})

module.exports  = mongoose.model('Cart',cartSchema)