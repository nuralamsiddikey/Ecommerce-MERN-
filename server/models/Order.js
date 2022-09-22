const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = Schema({
    userId: {
        type: String,
        required: true,
    },
    product: [
        {
            productId: {
                type: String,
            },
            amount: {
                type: Number,
            },
        },
    ],
    amount: {
        type: Number,
        required: true,
    },
    address: {
        type: Object,
        required: true,
    },
    status: {
        type: String,
        default: "pending",
    },
},{timestamps: true});

module.exports  = mongoose.model('Order',orderSchema)