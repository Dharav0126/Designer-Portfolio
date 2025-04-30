const express = require("express");
const router = express.Router();
const { handleContact } = require("../controllers/contactController");

router.post("/submit-form", handleContact);

module.exports = router;
