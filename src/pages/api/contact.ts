import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

interface EmailData {
  firstName: string;
  lastName: string;
  topic: string;
  message: string;
  email: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Extract data from the request body
  const { firstName, lastName, topic, message, email }: EmailData = req.body;
  console.log({ body: req.body });
  // Create a transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_COMPANY, // Replace with your company's email
      pass: process.env.EMAIL_PASSOWRD_COMPANY, // Replace with your email password or app-specific password
    },
  });

  const mailOptions = {
    from: email, // Sender's email address
    to: process.env.EMAIL_COMPANY, // Your company's email address
    subject: `New message from ${firstName} ${lastName} - ${topic}`,
    text: message,
  };

  try {
    console.log("=======");
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
}
