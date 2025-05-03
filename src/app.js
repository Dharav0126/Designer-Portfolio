const express = require('express');
const path = require('path');
const dotenv = require("dotenv");
const cors = require('cors');
const bodyParser = require("body-parser");
const contactRoutes = require("./routes/contactRoutes");
// Initializing the express app
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Loading environment variables
dotenv.config();

// Middleware for parsing form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files
app.use('/CSS', express.static(path.join(__dirname, 'CSS')));
app.use('/Script', express.static(path.join(__dirname, 'Script')));
app.use('/Images', express.static(path.join(__dirname, 'Images')));
app.use('/Resume', express.static(path.join(__dirname, 'Resume')));
// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/', contactRoutes);


// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on http://127.0.0.1:${PORT}`);
});
