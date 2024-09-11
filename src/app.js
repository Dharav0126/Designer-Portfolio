const express = require('express');
const path = require('path');
const dotenv = require("dotenv");

// initializing the express app
const app = express();

// Loading environment variables
dotenv.config();

// Middleware for parsing form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files
app.use('/CSS', express.static(path.join(__dirname, 'CSS')));
app.use('/Script', express.static(path.join(__dirname, 'Script')));
app.use('/Images', express.static(path.join(__dirname, 'Images')));

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle form submission
app.post('/submit-form', (req, res) => {
    const { name, email, number, subject, textarea } = req.body;
    if (!name || !email || !subject || !textarea) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
    }
    console.log(`Form details: Name: ${name}, Email: ${email}, Number: ${number}, Subject: ${subject}, Message: ${textarea}`);
    res.json({ success: true });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://127.0.0.1:${PORT}`);
});
