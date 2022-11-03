const { BASE_URL } = process.env;

const createVerifyEmail = () => {
  const mail = {
    to: sendEmail,
    from: "julie.ananieva@meta.ua",
    subject: "Підтвердж реєстрації на сайті",
    html: `<a target="_blanc" href="${BASE_URL}:${PORT}/api/users/verify/${verificationToken}">Click to verify your registration</a>`,
  };
  return mail;
};

module.exports = createVerifyEmail;
