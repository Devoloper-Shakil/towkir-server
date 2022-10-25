const mongoose = require('mongoose')


const reviwSchema=mongoose.Schema({
    title:{
        type: 'string',
        required: true
    },
    des:{
        type: 'string',
        required: true
    },
   
})

module.exports =mongoose.model('reviw',reviwSchema)