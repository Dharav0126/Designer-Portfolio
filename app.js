// importing the modules
const express = require('express');
const path = require('path');
const dotenv = require("dotenv");

// initializing the express app
const app = express();

// Loading enviornment variables
dotenv.config();

// Server static files
app.use('/CSS', express.static(path.join(__dirname, 'CSS')))
app.use('/Script', express.static(path.join(__dirname, 'Script')))
app.use('/Images', express.static(path.join(__dirname, 'Images')))

// returning the portfoilio
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
})

// server start
const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`server running on http://127.0.0.1:${PORT}`);
})