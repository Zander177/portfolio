// Make sure Resend is not even imported for now
// import { Resend } from 'resend'; // Leave this commented out

export async function POST(req, res) {
  // Skip logic for sending email
  const { body } = req;
  const { email, subject, message } = body;

  console.log('Form data received:', { email, subject, message });

  // Return a mock response instead of sending an email
  return res.status(200).json({ message: 'Form submitted successfully. No email sent.' });
}