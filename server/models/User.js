const  mongoose  = require('mongoose')
const Schema     = mongoose.Schema

const userSchema = Schema({
    fullName: {
        type: String,
        required: true

    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    isAdmin:{
        type: Boolean,
        default: false
    }
})

module.exports  = mongoose.model('User', userSchema)