import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {

  const { body } = req;
  const { email, subject, message } = body;
  
  try {
    // Commenting out the Resend API call to disable email sending temporarily
    // const { data, error } = await resend.emails.send({
    //   from: fromEmail,
    //   to: ['zandervdm5@gmail.com', email],
    //   subject: subject,
    //   react: <>
    //     <h1> { subject } </h1>
    //     <p> Thank you for contacting us!</p>
    //     <p> New Message Submitted </p>
    //     <p>{ message }</p>
    //   </>
    // });

    // If the Resend API call is disabled, return a mock response or success
    return Response.json({ message: "API call disabled temporarily." });

    // Uncomment this if you want to handle errors as before
    // if (error) {
    //   return Response.json({ error }, { status: 500 });
    // }

    // return Response.json(data);

  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}