require('dotenv').config();
const nodemailer = require('nodemailer');

// Create a transporter
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Send mail function
const sendMail = (formData) => {
  let mailOptions = {
    from: formData.email, // Sender's email
    to: 'dharav2626@gmail.com', // Your email
    subject: 'Portfolio Contact Form Message',
    text: `You received a message from ${formData.name}:\n\n${formData.message}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};
