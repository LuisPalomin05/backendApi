const {Router} = require('express');
const router = Router();
const {getCompras, createCompra, updateCompra, getCompra, deleteCompra } = require('../controllers/compras.controller');

router.route('/')
.get(getCompras)
.post(createCompra);

router.route('/:id')
.get(getCompra)
.put(updateCompra)
.delete(deleteCompra);

module.exports = router;