const getStudentQuery = require("../database/queries/getStudents");

exports.get = (request, response) => {
  
  getStudentQuery((err, res) => {
    if (err) return response.render("error");

    response.render("home", { res });
  });
};
