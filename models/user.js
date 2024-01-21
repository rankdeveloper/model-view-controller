const mongoose = require('mongoose')
//user schema
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true,
    },

    billAmt: {
        type: Number,
    }
})

const User = mongoose.model("user", userSchema)

module.exports = User