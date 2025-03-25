require('dotenv').config();
const nodemailer = require('nodemailer');

const sendMail = async (formData) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS, // Use an App Password
        },
    });

    let mailOptions = {
        from: formData.email, // Sender's email
        to: process.env.EMAIL_TO, // Your email
        subject: `Contact Form: ${formData.subject}`,
        text: `You received a message from ${formData.name} (${formData.email}, ${formData.number}):\n\n${formData.textarea}`,
    };

    await transporter.sendMail(mailOptions);
};

module.exports = sendMail;
