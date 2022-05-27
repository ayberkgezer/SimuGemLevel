const mongoose = require('mongoose')

const gemSchema = new mongoose.Schema({
    _id: Number,
    names: {
        type : String,
    },
    normalxp: {
        type : Number,
    },
    awakenedxp: {
        type : Number,
    }
})

module.exports = mongoose.model('Gemxp', gemSchema)