const { authCheck } = require("../authentication");

exports.checkAuthentication = (req, res, next) => {
  authCheck(req, (err, token) => {
    if (err) {
      return res.redirect("/login");
    } else {
      req.token = token;
      next();
    }
  });
};
