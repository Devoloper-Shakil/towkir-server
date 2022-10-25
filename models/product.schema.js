const productSchema=mongoose.Schema({
    title:{
        type: 'string',
        required: true
    },
    des:{
        type: 'string',
        required: true
    },
   
})
module.exports =mongoose.model('product',productSchema)