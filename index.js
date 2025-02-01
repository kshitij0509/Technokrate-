require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const morgan = require('morgan');

const app = express();
app.use(express.json());
app.use(morgan('tiny'))


console.log('process.env',process.env);

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

app.post('/sendMail', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required!" });
    }

    const mailOptions = {
        from: `"Contact Form" <${process.env.SMTP_USER}>`,
        to: process.env.RECEIVER_EMAIL,
        subject: "New Contact Form Submission",
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Email Error:", error);
        res.status(500).json({ error: "Failed to send email" });
    }
});

// Start the server : node index.js

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on Port:${PORT}`);
});
