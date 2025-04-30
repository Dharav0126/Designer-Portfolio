const sendEmail = require("../utils/mail");

exports.handleContact = async (req, res) => {
  const { name, email, number, subject, textarea } = req.body;

  if (!name || !email || !subject || !textarea) {
    return res.status(400).json({ message: "Required fields are missing." });
  }

  try {
    await sendEmail({ name, email, number, subject, textarea });
    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ message: "Failed to send message" });
  }
};
