const comprasCntrl = {};

const Compra = require("../models/compras");
comprasCntrl.getCompras = async (req, res) => {
  const compras = await Compra.find();
  res.json(compras);
};

comprasCntrl.createCompra = async (req, res) => {
  const { ruc, cliente, emision, empresa, nfactura, total, moneda } = req.body;

  const newCompra = new Compra({
    ruc,
    cliente,
    emision,
    empresa,
    nfactura,
    total,
    moneda,
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
  const { ruc, cliente, emision, empresa, nfactura, total, moneda } = req.body;

  await Compra.findOneAndUpdate(
    { _id: req.params.id },
    {
      ruc,
      cliente,
      emision,
      empresa,
      nfactura,
      total,
      moneda,
    }
  );
  res.json({ message: "compra creada" });
};

comprasCntrl.deleteCompra = async (req,res)=>{
    await Compra.findByIdAndDelete(req.params.id);
    res.json("eliminar compra")
} 

module.exports = comprasCntrl;