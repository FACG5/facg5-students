const dbConnection = require("../db_connection");

const loginQuery = (username, cb) => {
  console.log(username);

  const sql = {
    text: "SELECT * FROM students WHERE name = $1 ",
    values: [username]
  };
  dbConnection.query(sql, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

module.exports = loginQuery;
