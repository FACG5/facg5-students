const { parse } = require("cookie");
const { sign, verify } = require("jsonwebtoken");
require("env2")("./config.env");

const createCookie = (userId, cb) => {
  const data = {
    id: userId
  };

  sign(data, process.env.SECRET, (err, result) => {
    if (err) return cb(err);

    cb(null, result);
  });
};

const getTokenData = (data,cb) => {
  verify(data, process.env.SECRET, (err, data) => {
    if (err) return cb(new TypeError());
    cb(null, data);
  });
};
const authCheck = (request, cb) => {
  if (!request.headers.cookie) return cb(new TypeError());

  const { data } = parse(request.headers.cookie);

  if (!data) return cb(new TypeError());

  getTokenData(data,(err,data) => {
    if (err) return cb(new TypeError());
    cb(null, data);
  });
};

module.exports = { authCheck, createCookie, getTokenData };
