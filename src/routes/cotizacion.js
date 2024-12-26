const {Router}=require('express');
const router=Router();

const {getCotizacion,getCotizaciones, createCotizaciones, updateCotizaciones, deleteCotizaciones} = require('../controllers/cotizacion.controller');

router.route('/')
.get(getCotizaciones)
.post(createCotizaciones)
;

router.route('/:id')
.get(getCotizacion)
.put(updateCotizaciones)
.delete(deleteCotizaciones)
;

module.exports=router;