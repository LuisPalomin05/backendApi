const { Schema, model } = require("mongoose");

const pedidosSchema = new Schema(
  {
    producto: {type: Array, require: true,},
    nombreCliente: {type: String,},
    rucCliente: {type: String,},
    numeroCotizacion: {type: String,},
  },
  {
    timestamps: true,
  }
);

module.exports = model("pedido", pedidosSchema);
