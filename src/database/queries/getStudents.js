const dbConnection = require("../db_connection");

const getSudents = cb => {
  dbConnection.query("SELECT * FROM students", (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

module.exports = getSudents;
