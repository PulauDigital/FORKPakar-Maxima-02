import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Mailketing API endpoint - replace with the actual Mailketing API URL
const MAILKETING_API_URL = "https://api.mailketing.co.id/api/send" // Update this with the correct Mailketing API URL

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { formData } = body

    // Format the email content
    const emailSubject = "New MAXIMA Plan Registration"
    const emailText = `
New MAXIMA Plan Registration:

Name: ${formData.name}
WhatsApp: ${formData.phone}
Email: ${formData.email}
City: ${formData.city}
${formData.message ? `Message: ${formData.message}` : ""}

This email was automatically sent from the Pakar Maxima website registration form.
    `.trim()

    // Format the email HTML content
    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #7c3aed; color: white; padding: 15px; text-align: center; }
    .content { padding: 20px; border: 1px solid #ddd; }
    .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
    .field { margin-bottom: 10px; }
    .label { font-weight: bold; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>New MAXIMA Plan Registration</h2>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Name:</span> ${formData.name}
      </div>
      <div class="field">
        <span class="label">WhatsApp:</span> ${formData.phone}
      </div>
      <div class="field">
        <span class="label">Email:</span> ${formData.email}
      </div>
      <div class="field">
        <span class="label">City:</span> ${formData.city}
      </div>
      ${
        formData.message
          ? `
      <div class="field">
        <span class="label">Message:</span> ${formData.message}
      </div>
      `
          : ""
      }
    </div>
    <div class="footer">
      This email was automatically sent from the Pakar Maxima website registration form.
    </div>
  </div>
</body>
</html>
    `.trim()

    // Prepare the data for Mailketing API
    // Note: Adjust these parameters according to Mailketing's API documentation
    const mailketingData = {
      api_key: process.env.MAILKETING_API_KEY, // Add this to your environment variables
      from_email: process.env.MAILKETING_FROM_EMAIL || "noreply@pakarmaxima.my.id",
      from_name: "Pakar Maxima",
      to: "pulaudigital@gmail.com", // Recipient email
      subject: emailSubject,
      html_content: emailHtml,
      text_content: emailText,
      // Add any other required parameters for Mailketing API
    }

    // Send the email using Mailketing API
    const response = await fetch(MAILKETING_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any required authentication headers for Mailketing
      },
      body: JSON.stringify(mailketingData),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(`Mailketing API error: ${JSON.stringify(errorData)}`)
    }

    const responseData = await response.json()
    console.log("Email sent successfully via Mailketing:", responseData)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { error: "Failed to send email", details: error instanceof Error ? error.message : String(error) },
      { status: 500 },
    )
  }
}
