const mysql = require('mysql2');
const { DB_URL, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } = require('../config/database');

const pool = mysql.createPool({
    host: DB_URL,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    port: DB_PORT,
});

module.exports = pool;
