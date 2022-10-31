const { default: mongoose } = require("mongoose");


const alloursSchema = mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    img: {
       type: String,
       
    },
    totalEnroll: {
        type: String,
        required: true
    },
    totalClass: {
        type: String,
        required: true
    },
    classurl: {
        type: String,
        required: true
    }



})

module.exports = mongoose.model('allCours', alloursSchema)
