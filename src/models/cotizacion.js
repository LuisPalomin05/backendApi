const { Schema, model } = require('mongoose');

const cotizacionSchema = new Schema({
    numeroCotizacion : {type: String},
    nombrecliente : {type: String},
    rucCliente : {type: String},
    usuarioCreador : {type: String},
    tipoCotizacion : {type: String},
    fecha : {type: Date},
    productos : {type: Array},
    metodoPago : {type: String},
    moneda : {type: String},
    total : {type: Number},
    estado : {type: String},
    observaciones : {type: String},
    razonSocial : {type: String},

},{
    timestamps: true
})

module.exports = model('Cotizacion', cotizacionSchema);
