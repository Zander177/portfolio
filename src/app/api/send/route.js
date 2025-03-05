// Remove the Resend import entirely
// import { Resend } from 'resend';

export async function POST(req, res) {
  const { body } = req;
  const { email, subject, message } = body;

  try {
    // Here we skip the email sending logic completely
    console.log('Form data received:', { email, subject, message });

    // Respond back with a success message or a mock response
    return res.status(200).json({ message: 'Form submitted successfully. No email sent.' });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Something went wrong' });
  }
}