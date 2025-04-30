const sendEmail = require("../utils/mail");

exports.handleContact = async (req, res) => {
  const { name, email, number, subject, textarea } = req.body;

  if (!name || !email || !subject || !textarea) {
    return res.status(400).json({ message: "Required fields missing." });
  }

  try {
    await sendEmail({ name, email, number, subject, textarea });
    return res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Mail send error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

