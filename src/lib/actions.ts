'use server';

import {z} from 'zod';
import nodemailer from 'nodemailer';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  phone: z.string().optional(),
  zipcode: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
  interests: z.array(z.string()).optional(),
});

export async function submitContactForm(values: unknown) {
  const parsed = formSchema.safeParse(values);

  if (!parsed.success) {
    const errorMessages = parsed.error.errors
      .map(err => err.message)
      .join(', ');
    return {success: false, message: `Invalid form data: ${errorMessages}`};
  }

  const {name, email, phone, zipcode, message, interests} = parsed.data;

  // IMPORTANT: You must configure these environment variables on your hosting platform.
  // These are placeholders and will not work without your actual SMTP credentials.
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: (process.env.SMTP_PORT || '587') === '465',
    auth: {
      user: process.env.SMTP_USER, // e.g., your-gmail-address@gmail.com
      pass: process.env.SMTP_PASS, // e.g., your-gmail-app-password
    },
  });

  const mailOptions = {
    from: `"${name}" <${process.env.SMTP_USER}>`,
    to: 'creativelinesdigital@gmail.com',
    replyTo: email,
    subject: 'New Contact Form Submission from Your Website',
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Zip Code:</strong> ${zipcode || 'Not provided'}</p>
      <p><strong>Interests:</strong> ${
        interests?.join(', ') || 'Not specified'
      }</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {success: true, message: 'Message sent successfully!'};
  } catch (error) {
    console.error('Error sending email:', error);
    // In a real app, you might want to log this error to a service
    return {
      success: false,
      message:
        'Failed to send message. Please ensure your email credentials are set up correctly.',
    };
  }
}
