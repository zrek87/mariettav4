import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// Create and configure the Nodemailer transporter with pooling enabled
const transporter = nodemailer.createTransport({
  host: "mail.marietta.sa", // Your SMTP server
  port: 465, // SSL port
  secure: true, // SSL enabled for port 465
  auth: {
    user: "support@marietta.sa", // Your email user
    pass: "x5#07(wX4cWxTG", // Your email password
  },
  pool: true, // Enables pooling
  maxConnections: 5, // Maximum number of connections to re-use
  maxMessages: 100, // Maximum number of messages to send through one connection
  rateLimit: 10, // Number of messages to send per second
});

export async function POST(req: Request) {
  // Parse the incoming request body as JSON
  const body = await req.json();
  const { firstName, lastName, email, phone, message } = body;

  try {
    // Send the email using the configured transporter
    await transporter.sendMail({
      from: `"Contact Form" <support@marietta.sa>`, // Sender address
      to: "support@marietta.sa", // Your destination email
      subject: `New Contact from ${firstName} ${lastName}`, // Subject line
      text: `You have a new message from:
      - Name: ${firstName} ${lastName}
      - Email: ${email}
      - Phone: ${phone}
      - Message: ${message}`,
    });

    // If successful, send a success response back to the client
    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error); // Log the error for debugging

    // Return an error response back to the client
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}
