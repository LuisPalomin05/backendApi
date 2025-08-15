const ventasCntrl = {};

const Venta = require("../models/Ventas");

ventasCntrl.getVentas = async (req, res) => {
  const ventas = await Venta.find();
  res.json(ventas);

};

ventasCntrl.createVenta = async (req, res) => {
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
    usuarioCreador
  } = req.body;
  const newVentas = new Venta({
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
    usuarioCreador
  });
  await newVentas.save();
  res.send("venta created");
};

ventasCntrl.getVenta = async (req, res) => {
  const ventas = await Venta.findById(req.params.id);
  if (!ventas) return res.status(404).json({ message: "venta not found" });
  res.json(ventas);
};

ventasCntrl.updateVenta = async (req, res) => {
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
    usuarioCreador
  } = req.body;
  await Venta.findOneAndUpdate(
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
      usuarioCreador
    }
  );
  res.json({ menssage: "Venta creada" });
};

ventasCntrl.deleteVenta = async (req, res) => {
  await Venta.findByIdAndDelete(req.params.id);
  res.json(" venta deleted");
};

module.exports = ventasCntrl;
