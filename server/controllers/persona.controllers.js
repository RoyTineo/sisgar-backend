import { pool } from "../database/conexion.js";

export const getPersona = async (req, res) => {
  try {
    let idPersona = req.params.idPersona;

    let query = `SELECT * FROM tb_persona WHERE idtb_persona = ?`;
    const [result] = await pool.query(query, idPersona);

    if (result.length === 0)
      return res.status(404).json({ message: "Persona no encontrada" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getPersonas = async (req, res) => {
  try {
    let query = `SELECT * FROM tb_persona`;

    const [result] = await pool.query(query);

    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const postPersona = async (req, res) => {
  try {
    const {
      nombre,
      apellido_paterno,
      apellido_materno,
      idtb_tipo_documento,
      nro_documento,
      nacionalidad,
      edad,
      direccion,
      distrito,
      provincia,
      ocupacion,
      otra_referencia,
      telefono,
      correo,
    } = req.body;
    let query = `INSERT INTO tb_persona(
        nombre, 
        apellido_paterno, 
        apellido_materno,
        idtb_tipo_documento,
        nro_documento,
        nacionalidad,
        edad,
        direccion,
        distrito,
        provincia,
        ocupacion,
        otra_referencia,
        telefono,
        correo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;
    const [result] = await pool.query(query, [
      nombre,
      apellido_paterno,
      apellido_materno,
      idtb_tipo_documento,
      nro_documento,
      nacionalidad,
      edad,
      direccion,
      distrito,
      provincia,
      ocupacion,
      otra_referencia,
      telefono,
      correo,
    ]);
    console.log(req.body);
    res.json({
      id: result.insertId,
      nombre,
      apellido_paterno,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const putPersona = async (req, res) => {
  try {
    let idPersona = req.params.idPersona;
    let cambios = req.body;
    let query = `UPDATE tb_persona SET ? WHERE idtb_persona = ?`;

    const [result] = await pool.query(query, [cambios, idPersona]);

    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deletetPersona = async (req, res) => {
  try {
    let idPersona = req.params.idPersona;

    let query = `DELETE FROM tb_persona WHERE idtb_persona = ?`;

    const [result] = await pool.query(query, idPersona);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Persona no encontrada" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
