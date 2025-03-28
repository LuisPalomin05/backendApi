const {Router} =require('express');
const {getProveedores, createProveedores,getProveedor,deleteProveedor,updateProveedor} = require('../controllers/proveedores.controller');

const router = Router();



router.route('/')
    .get(getProveedores).post(createProveedores);

router.route('/:id')
    .get(getProveedor)
    .put(updateProveedor)
    .delete(deleteProveedor);

    module.exports = router;
