const pedidoCntrl = {};

const Pedido = require("../models/pedidos");

pedidoCntrl.getPedidos = async (req, res) => {
  const pedido = await Pedido.find();
  res.json(pedido);
};

pedidoCntrl.createPedido = async (req, res) => {
  const { producto, nombreCliente, rucCliente, numeroCotizacion,fechaPedido } = req.body;

  const newPedido = new Pedido({
    producto,
    nombreCliente,
    rucCliente,
    numeroCotizacion,
    fechaPedido
  });

  await newPedido.save();
  res.send("pedido creado");
};

pedidoCntrl.getPedido = async (req, res) => {
  const pedido = await Pedido.findById(req.params.id);

  res.json(pedido);
};

pedidoCntrl.updatePedido = async (req, res) => {
  const { producto, nombreCliente, rucCliente, numeroCotizacion,fechaPedido } = req.body;
  await Pedido.findOneAndUpdate(
    { _id: req.params.id },
    {
      producto,
      nombreCliente,
      rucCliente,
      numeroCotizacion,
      fechaPedido
    }
  );
  res.json({message:"pedido actualizado"})
};
pedidoCntrl.deletePedido = async (req,res)=>{
    await Pedido.findByIdAndDelete(req.params.id);
    res.json("eliminar pedido")
} 

module.exports = pedidoCntrl;


