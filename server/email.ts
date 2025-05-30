import { Client } from 'postmark';
import type { InsertContact } from '@shared/schema';

let client: Client | null = null;

function getPostmarkClient(): Client {
  if (!process.env.POSTMARK_API_KEY) {
    throw new Error('POSTMARK_API_KEY environment variable is not set');
  }
  
  if (!client) {
    client = new Client(process.env.POSTMARK_API_KEY);
  }
  
  return client;
}

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  htmlBody: string;
  textBody?: string;
}

export async function sendContactEmail(contact: InsertContact): Promise<boolean> {
  try {
    const postmarkClient = getPostmarkClient();
    
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

    await postmarkClient.sendEmail({
      From: 'hello@thesocialconcept.com', // You'll need to verify this email in Postmark
      To: 'danielle@thesocialconcept.co', // Where you want to receive contact form emails
      Subject: `New Contact: ${contact.name}`,
      HtmlBody: htmlBody,
      TextBody: textBody,
      ReplyTo: contact.email, // So you can reply directly to the person who contacted you
    });

    return true;
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
}

export async function sendConfirmationEmail(contact: InsertContact): Promise<boolean> {
  try {
    const postmarkClient = getPostmarkClient();
    
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

    await postmarkClient.sendEmail({
      From: 'hello@thesocialconcept.com',
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