const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cartSchema = Schema({
    userId: {
        type: String,
        required: true
    },
    productId: {
        type: Array
    }
}, { timestamps: true })

module.exports = mongoose.model('Cart', cartSchema)