const {Router} = require('express');

const router = Router();

router.route('/')
    .get(getClientes)
    .post(createCliente);

router.route('/:id')
    .get(getCliente)
    .put(updateCliente)
    .delete(deleteCliente);

module.exports = router;




