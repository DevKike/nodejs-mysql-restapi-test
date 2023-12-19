const pool = require("../db");

const ping = async (req, res) => {
  const [result] = await pool.query('SELECT "PONG" AS result');
  res.json(result);
};

module.exports = ping;
