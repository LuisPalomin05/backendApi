const ventasCntrl = {}

const Venta = require('../models/Ventas')

ventasCntrl.getVentas = async(req, res) => {
    const ventas = await Venta.find();
    res.json(ventas)
}

ventasCntrl.createVenta = async(req, res) => {
    const {title, author} = req.body;
    const newVentas = new Venta({title, author});
    await newVentas.save();
    res.send('venta created');
}
ventasCntrl.getVenta = async (req, res) => {
    const ventas = await Venta.findById(req.params.id);
    res.json(ventas);
}

ventasCntrl.updateVenta = async (req, res) => {
    const {title, author} = req.body;
    await Venta.findOneAndUpdate({_id:req.params.id},{
        title,
        author
    });
    res.json({menssage:'Venta creada'});
};

ventasCntrl.deleteVenta = async (req , res) => {
    await Venta.findByIdAndDelete(req.params.id);
    res.json(' venta deleted');
}

module.exports = ventasCntrl;










































































