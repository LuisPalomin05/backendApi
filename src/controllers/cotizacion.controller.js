const cotizacionCntlr = {};

const cotizacion = require("../models/cotizacion");

cotizacionCntlr.getCotizaciones = async (req, res) => {
  const cotizaciones = await cotizacion.find();
  res.json(cotizaciones);
};

cotizacionCntlr.getCotizacion = async (req, res) => {
  const cotizaciones = await cotizacion.findById(req.params.id);
  if (!cotizaciones)
    return res.status(404).json({ message: "cotizacion not found" });
  res.json(cotizaciones);
};

cotizacionCntlr.createCotizaciones = async (req, res) => {
  const {
    rucCliente,
    nombreCliente,
    fechaEmision,
    tipoMoneda,
    metodoPago,
    numeroCotizacion,
    producto,
    totalPago,
    observaciones,
  } = req.body;

  const newCotizacion = new cotizacion({
    rucCliente,
    nombreCliente,
    fechaEmision,
    tipoMoneda,
    metodoPago,
    numeroCotizacion,
    producto,
    totalPago,
    observaciones,
  });

  await newCotizacion.save();
};

cotizacionCntlr.updateCotizaciones = async (req, res) => {
  const {
    rucCliente,
    nombreCliente,
    fechaEmision,
    tipoMoneda,
    metodoPago,
    numeroCotizacion,
    producto,
    totalPago,
    observaciones,
  } = req.body;

  await cotizacion.findOneAndUpdate(
    { _id: req.params.id },
    {
      rucCliente,
      nombreCliente,
      fechaEmision,
      tipoMoneda,
      metodoPago,
      numeroCotizacion,
      producto,
      totalPago,
      observaciones,
    }
  );

  res.json({ message: "cotizacion updated" });
};

cotizacionCntlr.deleteCotizaciones = async (req, res) => {
  await cotizacion.findByIdAndDelete(req.params.id);
  res.json({ message: "cotizacion deleted" });
};

module.exports = cotizacionCntlr;
