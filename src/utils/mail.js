const env = require("dotenv");
const nodemailer = require("nodemailer");
env.config();
console.log(process.env.EMAIL_USER);
const sendEmail = async ({ name, email, number, subject, textarea }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "dharav2626@gmail.com",
      pass: "kcic plph qvjs ssek",
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
