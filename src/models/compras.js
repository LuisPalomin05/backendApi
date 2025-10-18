const { Schema, model} = require("mongoose");

const comprasSchema = new Schema(
  {
    rucCliente: { type: String, required: true },
    nombreCliente: { type: String },
    fechaEmision: { type: String },
    numerofactura: { type: String },
    importeTotal: { type: Number, required: true },
    tipoMoneda: { type: String },
  },
  {
    timestamps: true,
  }
);


module.exports = model("Compras", comprasSchema);
