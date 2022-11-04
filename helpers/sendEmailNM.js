// const nodemailer = require("nodemailer");
// require("dotenv").config();

// const { META_PASS } = process.env;

// const nodemailerConfig = {
//   host: "smtp.meta.ua",
//   port: 465,
//   secure: true,
//   auth: {
//     user: "julie.ananieva@meta.ua",
//     pass: META_PASS,
//   },
// };

// const transport = nodemailer.createTransport(nodemailerConfig);

// const mail = {
//   to: "julie.ananieva@gmail.com",
//   from: "julie.ananieva@meta.ua",
//   subject: "Test",
//   html: "test",
// };

// transport
//   .sendMail(mail)
//   .then(() => console.log("Email send seccess"))
//   .catch((error) => console.log(error.message));
