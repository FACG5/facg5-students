exports.clients = (req, res) => {
  res.status(404).render("error");
};

exports.server = (req, res) => {
  res.status(500);
};
