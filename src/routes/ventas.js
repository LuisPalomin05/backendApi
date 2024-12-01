const {Router}=require('express');
const router=Router();
const {getVentas, createVenta, getVenta, updateVenta, deleteVenta} = require('../controllers/ventas.controller');   

router.route('/')
.get(getVentas)
.get(createVenta);

router.route('/:id')
.get(getVenta)
.put(updateVenta)
.delete(deleteVenta);

module.exports = router;









