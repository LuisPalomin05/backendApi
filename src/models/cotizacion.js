const { Schema, model } = require("mongoose");

const cotizacionSchema = new Schema(
  {
    rucCliente: { type: String },
    nombreCliente: { type: String },
    fechaEmision: { type: String },
    tipoMoneda: { type: String },
    metodoPago: { type: String },
    numeroCotizacion: { type: String },
    producto: { type: Array },
    totalPago: { type: Number },
    observaciones: { type: String },
    // estado: { type: String },
    // autor: { type: String },
    // empresa: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Cotizacion", cotizacionSchema);
