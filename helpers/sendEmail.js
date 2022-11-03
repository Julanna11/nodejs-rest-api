// const sgMail = require("@sendgrid/mail");
// require("dotenv").config();

// const { SENDGRID_API_KEY, PROJECT_EMAIL } = process.env;

// sgMail.setApiKey(SENDGRID_API_KEY);

// const sendEmail = async (data) => {
//   const mail = { ...data, from: PROJECT_EMAIL };

//   await sgMail.send(mail);
//   return true;
// };

// module.exports = sendEmail;

const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASS } = process.env;

const nodemailerConfig = {
  host: "smtp.meta",
  port: 465,
  secure: true,
  auth: {
    user: "julie.ananieva@meta.ua",
    pass: META_PASS,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const mail = {
  to: "julie.ananieva@gmail.com",
  from: "julie.ananieva@meta.ua",
  subject: "Test",
  html: "test",
};

transport
  .sendMail(mail)
  .then(() => console.log("Email send seccess"))
  .catch((error) => console.log(error.message));
