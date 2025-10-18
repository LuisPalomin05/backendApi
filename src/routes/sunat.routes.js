// routes/sunat.routes.js
const {Router} =require('express');
const { getRUC } = require( "../controllers/sunat.controller.js");

const router = Router();

router.get("/ruc/:ruc", getRUC);

module.exports = router;