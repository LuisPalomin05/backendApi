const suppliersController = require('../controllers/suppliers.controller');

const supplier = require('../models/suppliers');

suppliersController.getSuppliers = async (req, res) => {
    const suppliers = await supplier.find();
    if(suppliers.length === 0) return res.json({message: 'No suppliers found'});
    res.json(suppliers);
};

suppliersController.createSupplier = async (req, res) => {
    const { rucSupplier, name, address, phone, email, attention } = req.body;
    const newSupplier = new supplier({ rucSupplier, name, address, phone, email, attention });
    await newSupplier.save();
    res.json({ message: 'Supplier saved' });
};

suppliersController.getSupplier = async (req, res) => {
    const supplier = await supplier.findById(req.params.id);
    res.json(supplier);
};

suppliersController.deleteSupplier = async (req, res) => {
    await supplier.findByIdAndDelete(req.params.id);
    res.json({ message: 'Supplier deleted' });
}

suppliersController.updateSupplier = async (req, res) => {
    const { rucSupplier, name, address, phone, email, attention } = req.body;
    await supplier.findByIdAndUpdate(req.params.id, { rucSupplier, name, address, phone, email, attention });
    res.json({ message: 'Supplier updated' });
}

module.exports = suppliersController;