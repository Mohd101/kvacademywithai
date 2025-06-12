import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { to, subject, text } = req.body;

  // Create a transporter using Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'kvacademy914@gmail.com',
      pass: 'wuvhrepwuvtjzyrd'
    }
  });

  try {
    // Send mail
    await transporter.sendMail({
      from: 'kvacademy914@gmail.com',
      to,
      subject,
      text
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
} 