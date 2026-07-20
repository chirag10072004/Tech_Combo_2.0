import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Helper to get Resend client safely
const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || apiKey.trim() === '') {
    throw new Error('RESEND_API_KEY is not configured in Vercel environment variables. Please add RESEND_API_KEY to Vercel Settings -> Environment Variables.');
  }
  return new Resend(apiKey);
};

// Middleware
app.use(cors());
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ limit: '25mb', extended: true }));

const getSenderEmail = () => process.env.SENDER_EMAIL || 'onboarding@resend.dev';
const getReceiverEmail = () => process.env.RECEIVER_EMAIL || 'chiragpardhi01@gmail.com';

// -------------------------------------------------------------
// POST /api/contact Route
// -------------------------------------------------------------
app.post(['/api/contact', '/contact'], async (req, res) => {
  const { firstName, lastName, email, phone, company, subject, message } = req.body;

  // Validation
  if (!firstName || !lastName || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: 'Please provide all required fields: firstName, lastName, email, subject, message.'
    });
  }

  try {
    const resend = getResendClient();
    const from = getSenderEmail();
    const adminEmail = getReceiverEmail();
    const senderName = `${firstName} ${lastName}`;

    // 1. Send Notification Email to Admin
    const adminEmailResult = await resend.emails.send({
      from: `Tech Combo Contact <${from}>`,
      to: adminEmail,
      replyTo: email,
      subject: `New Contact Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
          <div style="background-color: #2563eb; color: #fff; padding: 20px; text-align: center;">
            <h2 style="margin: 0; font-size: 24px;">New Contact Message</h2>
          </div>
          <div style="padding: 24px; background-color: #fff;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 30%; border-bottom: 1px solid #f1f5f9;">Name:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${senderName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Email:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Phone:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${phone || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Company:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${company || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Subject:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${subject}</td>
              </tr>
            </table>
            
            <div style="margin-top: 20px;">
              <h4 style="margin-bottom: 8px; color: #1e293b;">Message:</h4>
              <p style="white-space: pre-wrap; background: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0; margin: 0; font-size: 14px;">${message}</p>
            </div>
          </div>
          <div style="background-color: #f8fafc; padding: 12px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0;">
            This email was sent via Resend from your website contact form.
          </div>
        </div>
      `
    });

    if (adminEmailResult.error) {
      throw new Error(adminEmailResult.error.message || 'Resend failed to send admin email');
    }

    // 2. Send Auto-Reply to User (if enabled and not on onboarding test domain)
    const isTestDomain = from.includes('onboarding@resend.dev');
    if (process.env.SEND_AUTO_REPLY !== 'false' && !isTestDomain) {
      try {
        const autoReplyResult = await resend.emails.send({
          from: `Tech Combo <${from}>`,
          to: email,
          subject: `Thank you for contacting Tech Combo`,
          html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
              <div style="background-color: #1e293b; color: #fff; padding: 20px; text-align: center;">
                <h2 style="margin: 0; font-size: 24px;">Thank You!</h2>
              </div>
              <div style="padding: 24px; background-color: #fff;">
                <p>Hi ${firstName},</p>
                <p>Thank you for reaching out to <strong>Tech Combo</strong>!</p>
                <p>We have received your message regarding <strong>"${subject}"</strong>, and a member of our team will get back to you shortly.</p>
                <br>
                <p style="margin-bottom: 0;">Best regards,</p>
                <p style="margin-top: 4px; font-weight: bold; color: #2563eb;">Tech Combo Team</p>
              </div>
              <div style="background-color: #f8fafc; padding: 12px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0;">
                &copy; ${new Date().getFullYear()} Tech Combo. All rights reserved.
              </div>
            </div>
          `
        });
        if (autoReplyResult.error) {
          console.warn('Auto-reply skipped:', autoReplyResult.error.message);
        }
      } catch (autoReplyErr) {
        console.warn('Auto-reply note:', autoReplyErr.message);
      }
    } else if (isTestDomain) {
      console.log('Skipping auto-reply to user because onboarding@resend.dev test domain only sends to account owner.');
    }

    res.status(200).json({
      success: true,
      message: 'Message sent successfully.'
    });

  } catch (error) {
    console.error('Error sending contact email with Resend:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to send message.'
    });
  }
});

// -------------------------------------------------------------
// POST /api/career Route (With Resend Attachments)
// -------------------------------------------------------------
app.post(['/api/career', '/career'], async (req, res) => {
  const { job, fullName, email, phone, experience, portfolio, message, resume, resumeName } = req.body;

  // Validation
  if (!job || !fullName || !email || !phone || !experience || !message) {
    return res.status(400).json({
      success: false,
      message: 'Please provide all required fields: job, fullName, email, phone, experience, message.'
    });
  }

  try {
    const resend = getResendClient();
    const from = getSenderEmail();
    const adminEmail = getReceiverEmail();

    // Prepare attachments for Resend
    const attachments = [];
    if (resume) {
      let contentBuffer;
      if (typeof resume === 'string' && resume.includes('base64,')) {
        contentBuffer = Buffer.from(resume.split('base64,')[1], 'base64');
      } else {
        contentBuffer = Buffer.from(resume, 'base64');
      }

      attachments.push({
        filename: resumeName || 'resume.pdf',
        content: contentBuffer
      });
    }

    // 1. Send Application Email to Admin / HR
    const adminEmailResult = await resend.emails.send({
      from: `Tech Combo Careers <${from}>`,
      to: adminEmail,
      replyTo: email,
      subject: `New Job Application: ${job} - ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
          <div style="background-color: #16a34a; color: #fff; padding: 20px; text-align: center;">
            <h2 style="margin: 0; font-size: 24px;">New Job Application</h2>
            <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.9;">Position: ${job}</p>
          </div>
          <div style="padding: 24px; background-color: #fff;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 35%; border-bottom: 1px solid #f1f5f9;">Full Name:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Email:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;"><a href="mailto:${email}" style="color: #16a34a; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Phone:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Experience:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; text-transform: capitalize;">${experience}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Portfolio/LinkedIn:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">
                  ${portfolio && portfolio !== 'N/A' ? `<a href="${portfolio}" target="_blank" style="color: #16a34a; text-decoration: none;">${portfolio}</a>` : 'N/A'}
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Resume Attachment:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${resume ? (resumeName || 'Attached') : 'None'}</td>
              </tr>
            </table>
            
            <div style="margin-top: 20px;">
              <h4 style="margin-bottom: 8px; color: #1e293b;">Cover Message:</h4>
              <p style="white-space: pre-wrap; background: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0; margin: 0; font-size: 14px;">${message}</p>
            </div>
          </div>
          <div style="background-color: #f8fafc; padding: 12px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0;">
            This job application was processed via Resend.
          </div>
        </div>
      `,
      attachments: attachments.length > 0 ? attachments : undefined
    });

    if (adminEmailResult.error) {
      throw new Error(adminEmailResult.error.message || 'Resend failed to send application email');
    }

    // 2. Send Auto-Reply to Candidate (if enabled and not on onboarding test domain)
    const isTestDomain = from.includes('onboarding@resend.dev');
    if (process.env.SEND_AUTO_REPLY !== 'false' && !isTestDomain) {
      try {
        const autoReplyResult = await resend.emails.send({
          from: `Tech Combo Careers <${from}>`,
          to: email,
          subject: `Application Received: ${job} at Tech Combo`,
          html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
              <div style="background-color: #1e293b; color: #fff; padding: 20px; text-align: center;">
                <h2 style="margin: 0; font-size: 24px;">Application Received</h2>
                <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.9;">Position: ${job}</p>
              </div>
              <div style="padding: 24px; background-color: #fff;">
                <p>Hi ${fullName},</p>
                <p>Thank you for your interest in joining <strong>Tech Combo</strong>!</p>
                <p>We have successfully received your application for the <strong>"${job}"</strong> position. Our team is currently reviewing your application.</p>
                <br>
                <p style="margin-bottom: 0;">Best regards,</p>
                <p style="margin-top: 4px; font-weight: bold; color: #16a34a;">Tech Combo Hiring Team</p>
              </div>
              <div style="background-color: #f8fafc; padding: 12px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0;">
                &copy; ${new Date().getFullYear()} Tech Combo. All rights reserved.
              </div>
            </div>
          `
        });
        if (autoReplyResult.error) {
          console.warn('Candidate auto-reply skipped:', autoReplyResult.error.message);
        }
      } catch (autoReplyErr) {
        console.warn('Candidate auto-reply note:', autoReplyErr.message);
      }
    } else if (isTestDomain) {
      console.log('Skipping candidate auto-reply because onboarding@resend.dev test domain only sends to account owner.');
    }

    res.status(200).json({
      success: true,
      message: 'Application submitted successfully.'
    });

  } catch (error) {
    console.error('Error handling career application with Resend:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to process career application.'
    });
  }
});

// Health check endpoint
app.get(['/api/health', '/health'], (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Resend API Express server is running.' });
});

if (!process.env.VERCEL) {
  app.listen(port, () => {
    console.log(`Resend Server is running on port ${port}`);
  });
}

export default app;
