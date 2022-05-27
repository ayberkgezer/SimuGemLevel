const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    _id: Number,
    name: {
        type : String,
        required: true
    },
    icon: {
        type : String,
        required: true
    },
    corrupted: {
        type : String,
    },
    gemLevel: {
        type : Number,
    },
    gemQuality: {
        type : Number,
    },
    chaosValue: {
        type : Number,
    },
    exaltedValue: {
        type : Number,
    },
    levelRequired: {
        type : Number,
    },
    variant : {
        type : String,
    },
    itemClass: {
        type : Number,
    },
    sparkline : {
        type: Array,
    },
    lowConfidenceSparkline : {
        type : Array,
    },
    implicitModifiers : {
        type : Array,
    },
    explicitModifiers: {
        type : Array,
    },
    flavourText: {
        type : String,
    },
    count: {
        type : Number,
    },
    detailsId : {
        type : String,
    },
    listingCount : {
        type : Number,
    },
    normalxp: {
        type : Number,
    },
    awakenedxp: {
        number : Number,
    }
})

module.exports = mongoose.model('Post', postSchema)