import { pool } from "../database/conexion.js";

export const getTipoDocumento = async (req, res) => {
  try {
    let query = `SELECT idtb_tipo_documento, descripcion_corta from tb_tipo_doc_identificacion`;

    const [result] = await pool.query(query);

    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
