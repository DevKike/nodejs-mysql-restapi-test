//CreatePool es un conjunto de conexiones
const { createPool } = require('mysql2/promise');
const { DATABASE } = require("./config")

const { dbUser, dbPassword, dbHost, dbName, dbPort } = DATABASE;

const pool = createPool({
  user: dbUser,
  password: dbPassword,
  host: dbHost,
  database: dbName,
  port: dbPort,
});

module.exports = pool;