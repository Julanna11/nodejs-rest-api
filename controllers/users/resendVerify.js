const { RequestError, sendEmail, createVerifyEmail } = require("../../helpers");
const { User } = require("../../models/user");

const resendVerify = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw RequestError(400, " Email not foound ");
  }
  const mail = createVerifyEmail(email, user.verificationToken);
  await sendEmail(mail);
  res.json({
    message: "Verify email",
  });
};

module.exports = resendVerify;
