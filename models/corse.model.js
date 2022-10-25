const mongoose = require('mongoose')


const coursSchea=mongoose.Schema({
    title:{
        type: 'string',
        required: true
    },
    url:{
        type: 'string',
        required: true
    },
    freeCourse:[{
        type:mongoose.Types.ObjectId,
        ref:"allCours"
    }]
})

module.exports =mongoose.model('cours',coursSchea)