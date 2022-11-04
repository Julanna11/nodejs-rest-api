const register = require("./register");
const verify = require("./verify");
const resendVerify = require("./resendVerify");
const login = require("./login");
const logout = require("./logout");
const getCurrent = require("./getCurrent");
const updateAvatar = require("./updateAvatar");

module.exports = {
  register,
  verify,
  resendVerify,
  login,
  logout,
  getCurrent,
  updateAvatar,
};
