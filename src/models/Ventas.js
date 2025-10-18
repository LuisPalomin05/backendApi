const { Schema, model } = require("mongoose");

const ventaSchema = new Schema(
  {
    rucReceptor: { type: String, required: true },
    razonReceptor: { type: String },
    rucEmisor: { type: String, required: true },
    razonEmisor: { type: String },
    fechaEmision: { type: Date },
    fechaVencimiento: { type: String },
    formaPago: { type: String },
    tipoMoneda: { type: String, required: true },
    numeroFactura: { type: String },
    importeTotal: { type: Number, required: true },
    guiaRemision: { type: String },
    ordenCompra: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Venta", ventaSchema);
