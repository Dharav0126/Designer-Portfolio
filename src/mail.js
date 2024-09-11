const nodemailer = require('nodemailer');

// Create a transporter
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'dharav2609@gmail.com', // Replace with your email
    pass: 'L0rd1008$',  // Replace with your email password (or app-specific password)
  },
});

// Send mail function
const sendMail = (formData) => {
  let mailOptions = {
    from: formData.email, // Sender's email (from form)
    to: 'dharav2626@gmail.com', // Your email
    subject: 'Portfolio Contact Form Message', // Subject
    text: `You received a message from ${formData.name}:\n\n${formData.message}`, // Message body
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};
