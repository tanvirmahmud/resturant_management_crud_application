const userList = require("../model/userPanel");

exports.getUser = (req, res) => {
  userList
    .findUser(req.body.username, req.body.password)
    .then(([rows, fieldData]) => {
      if (rows.length > 0) {
        res.send({ id: rows[0].id, status: true });
      } else {
        res.send(false);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
