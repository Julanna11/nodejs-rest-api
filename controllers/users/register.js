const { User } = require("../../models/user");
const { RequestError } = require("../../helpers");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw RequestError(409, "Email in use");
  }
  const hashedPassw = await bcrypt.hash(password, 5);
  const avatarURL = gravatar.url(email);
  const result = await User.create({ email, password: hashedPassw, avatarURL });
  res.status(201).json({
    user: {
      email: result.email,
      subscription: result.subscription,
    },
  });
};

module.exports = register;
