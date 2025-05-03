# Dharav Patel - Developer Portfolio

This is my personal developer portfolio website, showcasing my skills, projects, and contact information. The application is built using Node.js and Express.js, and all files are organized inside the `src/` directory. The site includes a contact form that sends email using Nodemailer.

## 🌐 Live Demo

Visit the site: [https://designer-portfolio.onrender.com](https://designer-portfolio.onrender.com)

## 🚀 Features

- Full-stack personal portfolio
- Static HTML, CSS, and JS served from `src/`
- Contact form with backend email handling
- Clean routing with Express
- Deployed using Render

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Frontend:** HTML, CSS, JavaScript
- **Email Service:** Nodemailer
- **Deployment:** Render
- **Environment Config:** dotenv

## 📁 Project Structure

.
├── src/
│ ├── CSS/ # Styling files
│ ├── Images/ # Portfolio images
│ ├── Resume/ # Resume files
│ ├── Script/ # Frontend JavaScript
│ ├── routes/
│ │ └── contactRoutes.js # Email sending logic
│ ├── index.html # Main portfolio HTML
│ └── server.js # Express server entry point
├── .env # Environment variables (not committed)
├── .gitignore
├── package.json
└── README.md


## ⚙️ Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/Dharav0126/Designer-Portfolio.git
```
cd Designer-Portfolio
2. Install dependencies

```bash

npm install
```
3. Create a .env file

env
```bash
PORT=3000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```
4. Run the server

```bash

node src/server.js
Then open http://localhost:3000 in your browser.
```


📫 Contact
For collaborations or questions:

📧 Email: dharav2626@gmail.com

🌐 LinkedIn: linkedin.com/in/dharavpatel2608
