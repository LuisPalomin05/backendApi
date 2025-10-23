const { Schema, model } = require("mongoose");

const comprasSchema = new Schema(
  {
    nombreCliente: { type: String },
    rucCliente: { type: String, required: true },
    fechaEmision: { type: Date },
    numeroFactura: { type: String },
    tipoMoneda: { type: String, required: true },
    importeTotal: { type: Number, required: true },
    metodoPago: { type: String },
    guiaRemision: { type: String },
    ordenCompra: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Compras", comprasSchema);
