const { Schema, model } = require("mongoose");

const pedidosSchema = new Schema(
  {
    nombreCliente: {type: String,},
    producto: {type: Array, required: true,},
    rucCliente: {type: String,},
    numeroCotizacion: {type: String,},
    fechaPedido: {type: Date}
  },
  {
    timestamps: true,
  }
);

module.exports = model("pedido", pedidosSchema);
