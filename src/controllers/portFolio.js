const getPortFolio = require("../database/queries/getPortFolio");
const error = require("./error");

exports.get = (req, res, next) => {
  const { id } = req.params;
  getPortFolio(id, (err, response) => {
    if (response.length == 0) {
      res.render("notFoundObject", { msg: "User Not Found !", css: "error" });
      return;
    }
    res.render("portFolio", { response, css: "style", jsFile: "portfolio" });
  });
};
