const { User } = require("../../models/user");
const { RequestError, sendEmail } = require("../../helpers");
const bcrypt = require("bcryptjs");
const { nanoid } = require("nanoid");
const { BASE_URL, PORT } = process.env;
require("dotenv").config();

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw RequestError(409, "Email in use");
  }
  const hashedPassw = await bcrypt.hash(password, 5);
  const verificationToken = nanoid();
  const result = await User.create({
    email,
    password: hashedPassw,
    verificationToken,
  });

  await sendEmail(mail);
  res.status(201).json({
    user: {
      email: result.email,
      subscription: result.subscription,
      verificationToken: result.verificationToken,
    },
  });
};

module.exports = register;
