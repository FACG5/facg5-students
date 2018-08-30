const getStudentQuery = require("../database/queries/getStudents");

exports.get = (request, response) => {
  console.log(request.token);

  getStudentQuery((err, res) => {
    if (err) return response.render("error");
    let name = "";
    if (request.token.id) {
      let id = request.token.id;
      res.forEach(student => {
        if (student.id === id) {
          name = student.username;
          return response.render("home", {
            res,
            css: "style",
            jsFile: "home",
            name
          });
        }
      });
    }else{
      return response.render("home", { res, css: "style", jsFile: "home" });

    }

  });
};
