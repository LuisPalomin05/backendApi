const {Schema, model} = require('mongoose')

const compraSchema =
    new Schema({
        title: String,
        author: String, 
    },{
        timestamps: true
    })


    module.exports = model('Compra', compraSchema)