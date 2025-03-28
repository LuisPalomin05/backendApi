const { Schema, model } = require("mongoose");

const ClienteSchema = new Schema(
  {
    ruc: { type: String, required: true },
    cliente: { type: String, required: true },
    direccion: { type: String, required: true },
    telefono: { type: String, required: true },
    email: { type: String, required: true },
    atencion: { type: String, required: true },
    empresa: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = model("Cliente", ClienteSchema);
