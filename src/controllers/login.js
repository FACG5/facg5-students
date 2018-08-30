const loginQuery = require("../database/queries/login");
const { createCookie } = require("../authentication");
const bcrypt = require("bcryptjs");

exports.get = (request, response) => {
  response.render("login", { jsFile: "login", css: "login" });
};

exports.post = (request, response) => {
  const username = request.body.username;
  const password = request.body.password;
  loginQuery(username, (err, dbResult) => {
    if (err) return response.send(JSON.stringify({ err: "Error !" }));
    if (dbResult.length == 0)
      return response.send(JSON.stringify({ err: "Email Not Found !" }));
    bcrypt.compare(password, dbResult[0].password, (err, res) => {
      if (res === false)
        return response.send(JSON.stringify({ err: "Wrong Password !" }));
      createCookie(dbResult[0].id, (err, token) => {
        if (err) return response.send(JSON.stringify({ err: "ssds" }));
        console.log(token);

        response.setHeader(
          "Set-Cookie",
          `data=${token};httpOnly;Max-Age=90000000`
        );

        return response.send(JSON.stringify({ err: null, success: "Welcome" }));
      });
    });
  });
};
