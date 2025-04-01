const { Schema, model } = require("mongoose");

const cotizacionSchema = new Schema(
  {
    ruc: { type: String },
    cliente: { type: String },
    empresa: { type: String },
    emision: { type: Date },
    moneda: { type: String },
    formaPago: { type: String },
    nCotizacion: { type: String },
    productos: { type: Array },
    totalPago: { type: Number },
    observaciones: { type: String },
    estado: { type: String },
    autor: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Cotizacion", cotizacionSchema);


