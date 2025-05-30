import { Client } from 'postmark';
import { insertContactSchema, type InsertContact } from '../../shared/schema';
import { z } from 'zod';

// Cloudflare Pages Function for handling contact form submissions
export async function onRequestPost(context: any) {
  const { request, env } = context;

  // CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    // Parse request body
    const body = await request.json();
    const contactData = insertContactSchema.parse(body);

    // Initialize Postmark client
    if (!env.POSTMARK_API_KEY) {
      throw new Error('POSTMARK_API_KEY environment variable is not set');
    }
    
    const client = new Client(env.POSTMARK_API_KEY);

    // Send contact email
    const emailSent = await sendContactEmail(client, contactData);
    const confirmationSent = await sendConfirmationEmail(client, contactData);

    // Create a simple in-memory contact record (for this example)
    const contact = {
      id: Date.now(),
      ...contactData,
      createdAt: new Date().toISOString()
    };

    if (emailSent) {
      return new Response(JSON.stringify({
        success: true,
        contact,
        emailSent,
        confirmationSent
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      });
    } else {
      return new Response(JSON.stringify({
        success: false,
        message: "Failed to send contact email. Please try again or contact us directly."
      }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      });
    }

  } catch (error) {
    console.error('Contact form error:', error);
    
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify({
        success: false,
        errors: error.errors
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      });
    }

    return new Response(JSON.stringify({
      success: false,
      message: "Internal server error"
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders
      }
    });
  }
}

// Handle OPTIONS requests for CORS
export async function onRequestOptions() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
  });
}

async function sendContactEmail(client: Client, contact: InsertContact): Promise<boolean> {
  try {
    const htmlBody = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${contact.name}</p>
      <p><strong>Email:</strong> ${contact.email}</p>
      ${contact.company ? `<p><strong>Company:</strong> ${contact.company}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${contact.message}</p>
      <hr>
      <p><small>This message was sent from The Social Concept website contact form.</small></p>
    `;

    const textBody = `
New Contact Form Submission

Name: ${contact.name}
Email: ${contact.email}
${contact.company ? `Company: ${contact.company}` : ''}

Message:
${contact.message}

---
This message was sent from The Social Concept website contact form.
    `;

    await client.sendEmail({
      From: 'danielle@thesocialconcept.co',
      To: 'danielle@thesocialconcept.co',
      Subject: `New Contact: ${contact.name}`,
      HtmlBody: htmlBody,
      TextBody: textBody,
      ReplyTo: contact.email,
    });

    return true;
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
}

async function sendConfirmationEmail(client: Client, contact: InsertContact): Promise<boolean> {
  try {
    const htmlBody = `
      <h2>Thank you for contacting The Social Concept!</h2>
      <p>Hi ${contact.name},</p>
      <p>We've received your message and will get back to you within 24 hours.</p>
      <p>Here's a copy of what you sent:</p>
      <blockquote>
        <p>${contact.message}</p>
      </blockquote>
      <p>Best regards,<br>The Social Concept Team</p>
    `;

    const textBody = `
Thank you for contacting The Social Concept!

Hi ${contact.name},

We've received your message and will get back to you within 24 hours.

Here's a copy of what you sent:
"${contact.message}"

Best regards,
The Social Concept Team
    `;

    await client.sendEmail({
      From: 'danielle@thesocialconcept.co',
      To: contact.email,
      Subject: 'Thanks for reaching out to The Social Concept',
      HtmlBody: htmlBody,
      TextBody: textBody,
    });

    return true;
  } catch (error) {
    console.error('Confirmation email failed:', error);
    return false;
  }
}