// controllers/sunat.controller.js
import { consultarRUC } from "../services/sunat.service.js";

export async function getRUC(req, res) {
  try {
    const { ruc } = req.params;
    const data = await consultarRUC(ruc);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
