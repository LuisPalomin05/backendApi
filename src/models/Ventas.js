const {Schema, model} = require('mongoose')

const ventaSchema = new Schema ({
        title: String,
        author: String, 
    },{
        timestamps: true
    })

    module.exports = model('Venta',ventaSchema)