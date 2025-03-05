// Skip import and usage of Resend entirely to avoid issues
// import { Resend } from 'resend';

export async function POST(req, res) {
  const { body } = req;
  const { email, subject, message } = body;

  // Log the form data (or mock response)
  console.log('Form data received:', { email, subject, message });

  // Mock success response to avoid API call
  return res.status(200).json({ message: 'Form submitted successfully. No email sent.' });
}