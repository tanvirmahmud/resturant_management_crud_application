const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "appsbd-test",
  password: "tanvir380",
});

module.exports = pool.promise();
