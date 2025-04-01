const { Schema, model} = require("mongoose");

const comprasSchema = new Schema(
  {
    ruc: { type: String, required: true },
    cliente: { type: String },
    emision: { type: String },
    empresa: { type: String },
    nfactura: { type: String },
    total: { type: Number, required: true },
    moneda: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Compras", comprasSchema);
