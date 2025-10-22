const comprasCntrl = {};

const Compra = require("../models/compras");
comprasCntrl.getCompras = async (req, res) => {
  const compras = await Compra.find();
  res.json(compras);
};

comprasCntrl.createCompra = async (req, res) => {
  const {
    nombreCliente,
    rucCliente,
    fechaEmision,
    numeroFactura,
    tipoMoneda,
    importeTotal,
    metodoPago,
    guiaRemision,
    ordenCompra,
  } = req.body;

  const newCompra = new Compra({
    nombreCliente,
    rucCliente,
    fechaEmision,
    numeroFactura,
    tipoMoneda,
    importeTotal,
    metodoPago,
    guiaRemision,
    ordenCompra,
  });
  await newCompra.save();
  res.send("compra created");
};

comprasCntrl.getCompra = async (req, res) => {
  const compras = await Compra.findById(req.params.id);
  if (!compras) return res.status(404).json({ message: "compra not found" });
  res.json(compras);
};

comprasCntrl.updateCompra = async (req, res) => {
  const {
    nombreCliente,
    rucCliente,
    fechaEmision,
    numeroFactura,
    tipoMoneda,
    importeTotal,
    metodoPago,
    guiaRemision,
    ordenCompra,
  } = req.body;

  await Compra.findOneAndUpdate(
    { _id: req.params.id },
    {
    nombreCliente,
    rucCliente,
    fechaEmision,
    numeroFactura,
    tipoMoneda,
    importeTotal,
    metodoPago,
    guiaRemision,
    ordenCompra,
    }
  );
  res.json({ message: "compra creada" });
};

comprasCntrl.deleteCompra = async (req, res) => {
  await Compra.findByIdAndDelete(req.params.id);
  res.json("eliminar compra");
};

module.exports = comprasCntrl;
