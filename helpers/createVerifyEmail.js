const { BASE_URL, PORT } = process.env;
require("dotenv").config();

const createVerifyEmail = (email, verificationToken) => {
  const mail = {
    to: email,
    subject: "Підтвердіть реєстрацію на сайті",
    html: `<a target="_blanc" href="${BASE_URL}:${PORT}/api/users/verify/${verificationToken}">Click to verify your registration</a>`,
  };
  return mail;
};

module.exports = createVerifyEmail;
