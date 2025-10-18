const { Router } = require("express");
const router = Router();

const {
  getPedidos,
  createPedido,
  getPedido,
  updatePedido,
  deletePedido,
} = require("../controllers/pedidos.controller");


router.route("/").get(getPedidos).post(createPedido);


router.route("/:id").get(getPedido).put(updatePedido).delete(deletePedido);

module.exports = router;



