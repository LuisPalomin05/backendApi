const cotizacionCntlr = {}

const cotizacion = require('../models/cotizacion');

cotizacionCntlr.getCotizaciones = async (req, res)=> {
const cotizaciones = await cotizacion.find();
res.json(cotizaciones)
    
}

cotizacionCntlr.getCotizacion = async (req, res)=> {
    const cotizaciones = await cotizacion.findById(req.params.id);
    res.json(cotizaciones)
}

cotizacionCntlr.createCotizaciones = async(req, res)=>{
    const {numeroCotizacion,nombrecliente,rucCliente,usuarioCreador,tipoCotizacion,fecha,productos,metodoPago,moneda, total,estado,observaciones,razonSocial } = req.body;

    const newCotizacion = new cotizacion({
        numeroCotizacion,nombrecliente,rucCliente,usuarioCreador,tipoCotizacion,fecha,productos,metodoPago,moneda, total,estado,observaciones,razonSocial 
    });

    await newCotizacion.save();
};

cotizacionCntlr.updateCotizaciones = async(req, res)=>{
    const {numeroCotizacion,nombrecliente,rucCliente,usuarioCreador,tipoCotizacion,fecha,productos,metodoPago,moneda, total,estado,observaciones,razonSocial } = req.body;

    await cotizacion.findOneAndUpdate({_id:req.params.id }, {
        numeroCotizacion,nombrecliente,rucCliente,usuarioCreador,tipoCotizacion,fecha,productos,metodoPago,moneda, total,estado,observaciones,razonSocial 
    });

    res.json({ message: 'cotizacion updated' });
};

cotizacionCntlr.deleteCotizaciones = async (req, res)=>{
    await cotizacion.findByIdAndDelete(req.params.id)
    res.json({message:'cotizacion deleted'})
}

module.exports = cotizacionCntlr;



