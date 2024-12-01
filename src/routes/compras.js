const {Router}=require('express');
const router=Router();

const {getCompras, getCompra, createCompras,updateCompras,deleteCompras} = require('../controllers/compras.controller')

router.route('/')
.get(getCompras)
.post(createCompras);

router.route('/:id')
.get(getCompra)
.put(updateCompras)
.delete(deleteCompras);

module.exports = router;