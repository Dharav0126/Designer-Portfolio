const sendEmail = require("../utils/mail");

exports.handleContact = async (req, res) => {
  const { name, email, number, subject, textarea } = req.body;

  // ✅ Basic field check
  if (!name || !email || !subject || !textarea) {
    return res.status(400).json({ message: "Required fields are missing." });
  }

  try {
    await sendEmail({ name, email, number, subject, textarea });

    // ✅ Always respond with JSON
    return res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Mail error:", error);

    // ✅ Even on error, return JSON
    return res.status(500).json({ message: "Failed to send email" });
  }
};

