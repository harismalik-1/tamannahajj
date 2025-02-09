const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();
const { validateContact } = require('./middleware/validate');

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  methods: ['POST'],
  credentials: true
}));
app.use(express.json());

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD // Use App Password from Google Account
  }
});

// Contact form endpoint
app.post('/api/contact', validateContact, async (req, res) => {
  const { name, email, phone, interestedIn, message, preferredContact, bestTimeToCall } = req.body;

  try {
    // Email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL, // Your admin email address
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Interested In:</strong> ${interestedIn}</p>
        <p><strong>Preferred Contact Method:</strong> ${preferredContact}</p>
        <p><strong>Best Time to Call:</strong> ${bestTimeToCall}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    // Auto-reply to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Tamanna Hajj & Umrah',
      html: `
        <h2>Thank you for contacting us!</h2>
        <p>Dear ${name},</p>
        <p>We have received your inquiry about our ${interestedIn} services. Our team will review your message and get back to you shortly.</p>
        <p>Here's a summary of your message:</p>
        <p>${message}</p>
        <br>
        <p>Best regards,</p>
        <p>Tamanna Hajj & Umrah Team</p>
      `
    });

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 