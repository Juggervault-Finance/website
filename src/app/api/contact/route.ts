import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, company, subject, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate SMTP configuration
    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS
    ) {
      console.error("SMTP configuration missing");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Create transporter with connection options
    const port = parseInt(process.env.SMTP_PORT || "587");
    const isSecure = process.env.SMTP_SECURE === "true" || port === 465;
    
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: port,
      secure: isSecure, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      connectionTimeout: 10000, // 10 seconds
      greetingTimeout: 10000, // 10 seconds
      socketTimeout: 10000, // 10 seconds
      // For non-secure connections, require TLS upgrade
      requireTLS: !isSecure && port !== 25,
      tls: {
        // Do not fail on invalid certificates (useful for self-signed certs in dev)
        rejectUnauthorized: process.env.NODE_ENV === "production",
      },
    });

    // Verify connection (optional, helps debug)
    try {
      await transporter.verify();
      console.log("SMTP server connection verified");
    } catch (verifyError: any) {
      console.error("SMTP verification failed:", verifyError);
      // Continue anyway - some servers don't support verify
    }

    // Prepare email content
    const subjectLine = `Contact Form: ${
      subject.charAt(0).toUpperCase() + subject.slice(1)
    } - ${firstName} ${lastName}`;
    const emailBody = `
New contact form submission from Juggervault website:

Name: ${firstName} ${lastName}
Email: ${email}
Company: ${company || "Not provided"}
Subject: ${subject}

Message:
${message}

---
This email was sent from the Juggervault contact form.
    `.trim();

    // Send email
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || "contact@juggervault.finance",
      replyTo: email,
      subject: subjectLine,
      text: emailBody,
    });

    return NextResponse.json(
      { message: "Email sent successfully", messageId: info.messageId },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Contact form error:", error);
    
    // Provide more specific error messages
    let errorMessage = "Failed to send email. Please try again later.";
    
    if (error.code === "ETIMEDOUT" || error.code === "ECONNREFUSED") {
      errorMessage = "Could not connect to email server. Please check your SMTP settings.";
    } else if (error.code === "EAUTH") {
      errorMessage = "Email authentication failed. Please check your credentials.";
    } else if (error.responseCode === 535) {
      errorMessage = "Authentication failed. Please check your email and password.";
    } else if (error.message?.includes("Greeting never received")) {
      errorMessage = "SMTP server not responding. Please check SMTP_HOST and SMTP_PORT settings.";
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
