// services/sunat.service.js
import axios from "axios";

const CLIENT_ID = process.env.SUNAT_CLIENT_ID;
const CLIENT_SECRET = process.env.SUNAT_CLIENT_SECRET;

export async function getToken(ID, SECRET) {
  try {
    const { data } = await axios.post(
      "https://api.sunat.gob.pe/v1/clientesextranet/token",
      new URLSearchParams({
        grant_type: "client_credentials",
        scope: "https://api.sunat.gob.pe/v1/contribuyente",
        client_id: ID,
        client_secret: SECRET
      })
    );
    return data.access_token;
  } catch (err) {
    throw new Error(err.response?.data?.error_description || err.message);
  }
}

export async function consultarRUC(ruc) {
  const token = await getToken(CLIENT_ID, CLIENT_SECRET);
  const { data } = await axios.get(
    `https://api.sunat.gob.pe/v1/contribuyente/ruc/${ruc}`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return data;
}
