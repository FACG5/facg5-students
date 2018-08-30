const addProjectQuery = require("../database/queries/addProject");
exports.get = (req, response) => {
  const insert = "insert";

  response.render("insert", { insert, css: "add" });
};

exports.post = (req, response) => {
  const data = req.body;
  const name = data.nameValue;
  const desc = data.descValue;

  addProjectQuery(name, desc, (err, res) => {
    if (err) return response.send(JSON.stringify({ err: "sadgsa" }));
    return response.send(JSON.stringify(res));
  });
};
