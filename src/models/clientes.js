const {Schema, model} = require('mongoose');

const clienteSchema = new Schema({
    rucCliente: {type: String, required: true},
    name: {type: String, required: true},
    address: {type: String, required: true},
    phone: {type: String, required: true},
    email: {type: String, required: true},
    attention: {type: String, required: true}
},{timestamps: true});