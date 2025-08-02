import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { z } from "zod";

// Input validation schema
const contactSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(50, "First name too long"),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(50, "Last name too long"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(10, "Phone number too short")
    .max(20, "Phone number too long"),
  message: z
    .string()
    .min(10, "Message too short")
    .max(1000, "Message too long"),
});

// Create and configure the Nodemailer transporter with pooling enabled
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "mail.marietta.sa",
  port: parseInt(process.env.SMTP_PORT || "465"),
  secure: true, // Use SSL for port 465 (faster than STARTTLS)
  auth: {
    user: process.env.SMTP_USER || "support@marietta.sa",
    pass: process.env.SMTP_PASS || "",
  },
  pool: true, // Enables pooling
  maxConnections: 10, // Increased for better performance
  maxMessages: 200, // Increased for better performance
  rateLimit: 20, // Increased rate limit
  connectionTimeout: 60000, // 60 seconds connection timeout
  greetingTimeout: 30000, // 30 seconds greeting timeout
  socketTimeout: 60000, // 60 seconds socket timeout
});

export async function POST(req: Request) {
  // Validate request method
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }

  // Validate content type
  const contentType = req.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
    return NextResponse.json(
      { error: "Content-Type must be application/json" },
      { status: 400 }
    );
  }

  try {
    // Parse the incoming request body as JSON
    const body = await req.json();

    // Validate input data
    const validatedData = contactSchema.parse(body);
    const { firstName, lastName, email, phone, message } = validatedData;

    // Sanitize inputs to prevent injection attacks
    const sanitizedData = {
      firstName: firstName.trim().replace(/[<>]/g, ""),
      lastName: lastName.trim().replace(/[<>]/g, ""),
      email: email.trim().toLowerCase(),
      phone: phone.trim().replace(/[^\d+\-\(\)\s]/g, ""),
      message: message.trim().replace(/[<>]/g, ""),
    };

    // Send the email using the configured transporter
    await transporter.sendMail({
      from: `"Contact Form" <${
        process.env.SMTP_USER || "support@marietta.sa"
      }>`,
      to: process.env.CONTACT_EMAIL || "support@marietta.sa",
      subject: `New Contact from ${sanitizedData.firstName} ${sanitizedData.lastName}`,
      text: `You have a new message from:
      - Name: ${sanitizedData.firstName} ${sanitizedData.lastName}
      - Email: ${sanitizedData.email}
      - Phone: ${sanitizedData.phone}
      - Message: ${sanitizedData.message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${sanitizedData.firstName} ${
        sanitizedData.lastName
      }</p>
        <p><strong>Email:</strong> ${sanitizedData.email}</p>
        <p><strong>Phone:</strong> ${sanitizedData.phone}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizedData.message.replace(/\n/g, "<br>")}</p>
      `,
    });

    // If successful, send a success response back to the client
    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in contact API:", error);

    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: (error as any).errors.map((err: any) => ({
            field: err.path.join("."),
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }

    // Handle JSON parsing errors
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: "Invalid JSON in request body" },
        { status: 400 }
      );
    }

    // Handle email sending errors
    if (error instanceof Error) {
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }

    // Generic error response
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
