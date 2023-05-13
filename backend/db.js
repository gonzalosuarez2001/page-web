const mysql = require('mysql2');
const util = require('util');
require('dotenv').config({path:'./.env'});

const pool = mysql.createPool({

    connectionLimit: 10,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB_NAME
})

pool.query = util.promisify(pool.query);

module.exports = pool;