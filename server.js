import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

// Create a transporter using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kvacademy914@gmail.com',
    pass: 'wuvhrepwuvtjzyrd'
  }
});

app.post('/send-email', async (req, res) => {
  const { name, email, phone, course, message } = req.body;

  const mailOptions = {
    from: 'kvacademy914@gmail.com',
    to: 'kvacademy914@gmail.com',
    subject: 'New Course Inquiry from Website',
    html: `
      <div style="font-family: Arial, sans-serif; padding: 25px; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); background-color: #ffffff;">
        <h2 style="color: #2563eb; margin-bottom: 30px; text-align: center; font-size: 28px; font-weight: bold;">New Contact Form Submission</h2>
        
        <p style="margin: 0 0 15px 0; line-height: 1.6;"><b style="font-size: 20px; color: #1e40af; font-weight: bold;">Name:</b> <span style="font-size: 18px; color: #333333;">${name}</span></p>

        <p style="margin: 0 0 15px 0; line-height: 1.6;"><b style="font-size: 20px; color: #1e40af; font-weight: bold;">Email:</b> <span style="font-size: 18px; color: #333333;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></span></p>

        <p style="margin: 0 0 15px 0; line-height: 1.6;"><b style="font-size: 20px; color: #1e40af; font-weight: bold;">Phone:</b> <span style="font-size: 18px; color: #333333;">${phone}</span></p>

        <p style="margin: 0 0 15px 0; line-height: 1.6;"><b style="font-size: 20px; color: #1e40af; font-weight: bold;">Interested Course:</b> <span style="font-size: 18px; color: #333333;">${course}</span></p>

        <p style="margin: 0; line-height: 1.6;"><b style="font-size: 20px; color: #1e40af; font-weight: bold;">Message:</b> <span style="font-size: 18px; color: #333333;">${message}</span></p>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 