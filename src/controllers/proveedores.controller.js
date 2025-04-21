const suppliersController = {};

const supplier = require('../models/proveedores');

suppliersController.getProveedores = async (req, res) => {
    const suppliers = await supplier.find();
    if(suppliers.length === 0) return res.json({message: 'No suppliers found'});
    res.json(suppliers);
};

suppliersController.createProveedores = async (req, res) => {
    const { rucSupplier, name, address, phone, email, attention } = req.body;
    const newSupplier = new supplier({ rucSupplier, name, address, phone, email, attention });
    await newSupplier.save();
    res.json({ message: 'Supplier saved' });
};

suppliersController.getProveedor = async (req, res) => {
    const suppliers = await supplier.findById(req.params.id);
    if (!suppliers) return res.status(404).json({ message: 'Supplier not found' });
    res.json(suppliers);
};

suppliersController.deleteProveedor = async (req, res) => {
    await supplier.findByIdAndDelete(req.params.id);
    res.json({ message: 'Supplier deleted' });
}

suppliersController.updateProveedor = async (req, res) => {
    const { rucSupplier, name, address, phone, email, attention } = req.body;
    await supplier.findByIdAndUpdate(req.params.id, { rucSupplier, name, address, phone, email, attention });
    res.json({ message: 'Supplier updated' });
}

module.exports = suppliersController;