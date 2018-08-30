
const dbConnection = require("../db_connection");

const getPortFolio = (stdId, cb) => {
  const sql = {
    text: 'select students.name, students.age, students.cohort, students.gender, students.img, projects.name_project, projects.img_url, projects.url, projects.description from students INNER JOIN projects ON projects.student_id = students.id where students.id= $1',
    values: [stdId]
  };
  dbConnection.query(sql, (err, res) => {
    if (err) {
      return cb(err);
    }
    return cb(null, res.rows);
  });
};

module.exports = getPortFolio;