const path = require("path");

exports.notFound = (req, res) => {
  res.status(404).render("error", {
    layout: "error",
    statusCode: 404,
    errorMessage: "Page not found",
    css: "style"
  });
};

exports.server = (err, req, res, next) => {
  res.status(500).render("error", {
    layout: "error",
    statusCode: 500,
    errorMessage: "Internal server error",
    css: "style"
  });
};
