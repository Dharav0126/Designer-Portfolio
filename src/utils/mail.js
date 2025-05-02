const env = require("dotenv");
const nodemailer = require("nodemailer");
env.config();
console.log(process.env.EMAIL_USER);
const sendEmail = async ({ name, email, number, subject, textarea }) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
  port: 587,
  secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New Contact: ${subject}`,
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${number}
      Subject: ${subject}
      Message: ${textarea}
    `,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
