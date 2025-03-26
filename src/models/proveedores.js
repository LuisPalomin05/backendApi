const {Schema,model} = require('mongoose');

const ProveedorSchema = new Schema({
    rucProveedor: {
        type: String,
        required: true
    },
    nombre: String,
    direccion: String,
    telefono: String ,
    email: String,
    atencion: String,
},{
    timestamps: true
});

module.exports = model('Proveedor', ProveedorSchema);