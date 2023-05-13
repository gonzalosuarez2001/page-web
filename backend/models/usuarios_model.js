const pool = require("../db");
const md5 = require("md5");

async function getUserByNameAndPassword(user, password) {
  try {
    let query =
      "SELECT * FROM usuarios WHERE usuario = ? AND password = ? limit 1";
    let resultado = await pool.query(query, [user, md5(password)]);
    return resultado[0];
  } catch (error) {
    throw error;
  }
}

module.exports = getUserByNameAndPassword;
