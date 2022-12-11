const db = require("../util/database");

exports.findUser = (username, password) => {
  return db.execute("SELECT * FROM user WHERE name=? AND password=?", [
    username,
    password,
  ]);
};
