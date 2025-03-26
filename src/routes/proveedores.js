const {Router} =require('express');
const router = Router();

const {getProveedores, createProveedores,getProveedor,deleteProveedor,updateProveedor} = require('../controllers/proveedores.controller');

router.route('/')
    .get(getProveedores).post(createProveedores);

router.route('/:id')
    .get(getProveedor)
    .put(updateProveedor)
    .delete(deleteProveedor);

    module.exports = router;
