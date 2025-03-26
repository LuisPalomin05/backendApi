const clienteController = import('../controllers/cliente.controller');

const Cliente = import('../models/cliente');

clienteController.getClientes = async (req, res) => {
  const clientes = await Cliente.find();
  res.json(clientes);
};

clienteController.createCliente = async (req, res) => {
  const { nombre, apellido, dni, email, telefono, direccion } = req.body;
  const newCliente = new Cliente({ nombre, apellido, dni, email, telefono, direccion });
  await newCliente.save();
  res.json({ message: 'Cliente saved' });
};  

clienteController.getCliente = async (req, res) => {
  const cliente = await Cliente.findById(req.params.id);
  res.json(cliente);
};

clienteController.deleteCliente = async (req, res) => {
  await Cliente.findByIdAndDelete(req.params.id);
  res.json({ message: 'Cliente deleted' });
};

clienteController.updateCliente = async (req, res) => {
    await Cliente.findByIdAndUpdate(req.params.id, req.body);

    res.json({ message: 'Cliente updated' });
}
module.exports = clienteController;