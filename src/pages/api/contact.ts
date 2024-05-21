// pages/api/contact.ts

import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { firstName, lastName, topic, message, email } = req.body;

    console.log({ firstName, lastName, topic, message, email });
    // Process the form data, e.g., save to database, send email, etc.
    // Example: Save to database
    // await saveToDatabase({ firstName, lastName, topic, message, email });

    // Example: Send an email
    await sendEmail({ firstName, lastName, topic, message, email });

    res.status(200).json({ message: "Form submitted successfully" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

interface EmailData {
  firstName: string;
  lastName: string;
  topic: string;
  message: string;
  email: string;
}

export async function sendEmail({
  firstName,
  lastName,
  topic,
  message,
  email,
}: EmailData) {
  // Create a transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // Replace with your SMTP server
    port: 465, // Replace with the appropriate port
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_COMPANY, // Replace with your email
      pass: process.env.NEXT_PUBLIC_EMAIL_PASSOWRD_COMPANY, // Replace with your email password
    },
  });

  // Define the email options
  const mailOptions = {
    from: `"${firstName} ${lastName}" ${email}`, // Replace with your name and email
    to: "leeyahav@gmail.com", // Replace with the recipient email
    subject: `New Contact Form Submission: ${topic}`,
    text: `You have a new contact form submission.\n\n
           First Name: ${firstName}\n
           Last Name: ${lastName}\n
           Email: ${email}\n
           Topic: ${topic}\n
           Message: ${message}`,
    html: `<p>You have a new contact form submission.</p>
           <p><strong>First Name:</strong> ${firstName}</p>
           <p><strong>Last Name:</strong> ${lastName}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Topic:</strong> ${topic}</p>
           <p><strong>Message:</strong> ${message}</p>`,
  };

  // Send the email
  const info = await transporter.sendMail(mailOptions);

  console.log("Message sent: %s", info.messageId);
}
