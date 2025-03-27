const clienteController = import("../controllers/cliente.controller");

const Cliente = import("../models/clientes");

clienteController.getClientes = async (req, res) => {
  const clientes = await Cliente.find();
  res.json(clientes);
};

clienteController.createCliente = async (req, res) => {
  const { rucCliente,name,address,phone,email,attention,empresa } = req.body;
  const newCliente = new Cliente({
    rucCliente,
    name,
    address,
    phone,
    email,
    attention,
    empresa
  });
  await newCliente.save();
  res.json({ message: "Cliente saved" });
};

clienteController.getCliente = async (req, res) => {
  const cliente = await Cliente.findById(req.params.id);
  res.json(cliente);
};

clienteController.deleteCliente = async (req, res) => {
  await Cliente.findByIdAndDelete(req.params.id);
  res.json({ message: "Cliente deleted" });
};

clienteController.updateCliente = async (req, res) => {
  await Cliente.findByIdAndUpdate(req.params.id, req.body);

  res.json({ message: "Cliente updated" });
};
module.exports = clienteController;
