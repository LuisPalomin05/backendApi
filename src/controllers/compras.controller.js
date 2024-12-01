const comprasCntrlr = {}

const Compra = require('../models/Compras');

comprasCntrlr.getCompras = async (req, res)=> {
const compras = await Compra.find();
res.json(compras)
    
}

comprasCntrlr.getCompra = async (req, res)=> {
    const compras = await Compra.findById(req.params.id);
    res.json(compras)
}

comprasCntrlr.createCompras = async(req, res)=>{
    const {title,author} = req.body;

    const newCompra = new Compra({
        title,
        author
    });

    await newCompra.save();
};

comprasCntrlr.updateCompras = async(req, res)=>{
    const {title,author} = req.body;

    await Compra.findOneAndUpdate({_id:req.params.id }, {
        title,
        author
    });

    res.json({ message: 'compra updated' });
};

comprasCntrlr.deleteCompras = async (req, res)=>{
    await Compra.findByIdAndDelete(req.params.id)
    res.json({message:'compra deleted'})


}

module.exports = comprasCntrlr;



