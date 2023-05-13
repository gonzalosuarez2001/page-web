const pool = require("../db");

async function getNovedades() {
  try {
    let query = "SELECT * FROM novedades ORDER BY id ASC";
    let resultado = await pool.query(query);
    return resultado;
  } catch (error) { 
    throw(error);
  }
};

async function insertNovedad(data) {
  try {
    let query = "INSERT INTO novedades (titulo,subtitulo,cuerpo,img_id) VALUES (?)";
    let resultado = await pool.query(query,[data]);
    return resultado;
  } catch (error) { 
    throw(error);
  }
};

async function deleteNovedad(id) {
  try {
    let query = "DELETE FROM novedades WHERE id = ?";
    let resultado = await pool.query(query,[id]);
    return resultado;
  } catch (error) { 
    throw(error);
  }
};

async function getNovedadById(id) {
  try {
    let query = "SELECT * FROM novedades WHERE id = ?";
    let resultado = await pool.query(query,[id]);
    return resultado;
  } catch (error) { 
    throw(error);
  }
};

async function modifyNovedad(data,id) {
  try {
    let query = "UPDATE novedades SET ? WHERE id = ?";
    let resultado = await pool.query(query,[data,id]);
    return resultado;
  } catch (error) { 
    throw(error);
  }
};

module.exports = {getNovedades, insertNovedad, deleteNovedad, getNovedadById, modifyNovedad};
