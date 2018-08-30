const dbConnection = require("../db_connection");

const addProjcet = (name, desc, cb) => {
  const sql = {
    text:
      "INSERT INTO projects (student_id, name_project, img_url, url, description) Values($1, 'Qustion and Answerd','https://www.rajras.in/wp-content/uploads/2016/07/qa-300x270.png' ,'https://questions5.herokuapp.com/', $2) RETURNING *",
    values: [name, desc]
  };
  dbConnection.query(sql, (err, res) => {
    if (err) {
      console.log(err);

      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

module.exports = addProjcet;
