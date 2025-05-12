import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import sgMail from "@sendgrid/mail"

// Initialize SendGrid with API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY || "")

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { formData } = body

    // Format the email content
    const emailText = `
New MAXIMA Plan Registration:

Name: ${formData.name}
WhatsApp: ${formData.phone}
Email: ${formData.email}
City: ${formData.city}
${formData.message ? `Message: ${formData.message}` : ""}

This email was automatically sent from the Pakar Maxima website registration form.
    `.trim()

    const msg = {
      to: "pulaudigital@gmail.com",
      from: "noreply@pakarmaxima.my.id", // This should be a verified sender in your SendGrid account
      subject: "New MAXIMA Plan Registration",
      text: emailText,
      html: emailText.replace(/\n/g, "<br>"),
    }

    await sgMail.send(msg)
    console.log("Email sent successfully")

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { error: "Failed to send email", details: error instanceof Error ? error.message : String(error) },
      { status: 500 },
    )
  }
}
