const ventasCntrl = {};

const Venta = require("../models/Ventas");

ventasCntrl.getVentas = async (req, res) => {
  const ventas = await Venta.find();
  res.json(ventas);
};

ventasCntrl.createVenta = async (req, res) => {
  const {
    ruc,
    cliente,
    emision,
    vencimiento,
    empresa,
    nfactura,
    total,
    moneda,
  } = req.body;
  const newVentas = new Venta({
    ruc,
    cliente,
    emision,
    vencimiento,
    empresa,
    nfactura,
    total,
    moneda,
  });
  await newVentas.save();
  res.send("venta created");
};
ventasCntrl.getVenta = async (req, res) => {
  const ventas = await Venta.findById(req.params.id);
  res.json(ventas);
};

ventasCntrl.updateVenta = async (req, res) => {
  const {
    ruc,
    cliente,
    emision,
    vencimiento,
    empresa,
    nfactura,
    total,
    moneda,
  } = req.body;
  await Venta.findOneAndUpdate(
    { _id: req.params.id },
    {
      ruc,
      cliente,
      emision,
      vencimiento,
      empresa,
      nfactura,
      total,
      moneda,
    }
  );
  res.json({ menssage: "Venta creada" });
};

ventasCntrl.deleteVenta = async (req, res) => {
  await Venta.findByIdAndDelete(req.params.id);
  res.json(" venta deleted");
};

module.exports = ventasCntrl;
