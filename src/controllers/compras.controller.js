const comprasCntrl = {};

const Compra = require("../models/compras");
comprasCntrl.getCompras = async (req, res) => {
  const compras = await Compra.find();
  res.json(compras);
};

comprasCntrl.createCompra = async (req, res) => {
  const {
    rucReceptor,
    razonReceptor,
    rucEmisor,
    razonEmisor,
    fechaEmision,
    fechaVencimiento,
    formaPago,
    tipoMoneda,
    numeroFactura,
    importeTotal,
    guiaRemision,
    ordenCompra,
    usuarioCreador,
  } = req.body;

  const newCompra = new Compra({
    rucReceptor,
    razonReceptor,
    rucEmisor,
    razonEmisor,
    fechaEmision,
    fechaVencimiento,
    formaPago,
    tipoMoneda,
    numeroFactura,
    importeTotal,
    guiaRemision,
    ordenCompra,
    usuarioCreador,
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
    rucReceptor,
    razonReceptor,
    rucEmisor,
    razonEmisor,
    fechaEmision,
    fechaVencimiento,
    formaPago,
    tipoMoneda,
    numeroFactura,
    importeTotal,
    guiaRemision,
    ordenCompra,
    usuarioCreador,
  } = req.body;

  await Compra.findOneAndUpdate(
    { _id: req.params.id },
    {
      rucReceptor,
      razonReceptor,
      rucEmisor,
      razonEmisor,
      fechaEmision,
      fechaVencimiento,
      formaPago,
      tipoMoneda,
      numeroFactura,
      importeTotal,
      guiaRemision,
      ordenCompra,
      usuarioCreador,
    }
  );
  res.json({ message: "compra creada" });
};

comprasCntrl.deleteCompra = async (req, res) => {
  await Compra.findByIdAndDelete(req.params.id);
  res.json("eliminar compra");
};

module.exports = comprasCntrl;
