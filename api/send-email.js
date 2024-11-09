import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { firstName, lastName, email, message, company, industry, assetsCount, locations, currentSystem, requirements, managementType } = req.body;

  // Create a transporter using SMTP
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Format the email content based on whether it's an asset management inquiry or general contact
  const isAssetInquiry = !!company;
  
  const emailContent = isAssetInquiry ? `
    <h2>New Asset Management Inquiry</h2>
    <h3>Contact Information</h3>
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Company:</strong> ${company}</p>
    
    <h3>Business Details</h3>
    <p><strong>Industry:</strong> ${industry}</p>
    <p><strong>Number of Assets:</strong> ${assetsCount || 'Not specified'}</p>
    <p><strong>Number of Locations:</strong> ${locations || 'Not specified'}</p>
    <p><strong>Current System:</strong> ${currentSystem || 'Not specified'}</p>
    <p><strong>Management Type:</strong> ${managementType}</p>
    
    <h3>Requirements</h3>
    <p>${requirements || 'No specific requirements provided'}</p>
    
    <h3>Additional Information</h3>
    <p>${message || 'No additional information provided'}</p>
  ` : `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `;

  try {
    // Send mail with defined transport object
    let info = await transporter.sendMail({
      from: `"QRSolutions Contact Form" <${process.env.SMTP_USER}>`,
      to: "info@qrsolutions.site",
      subject: isAssetInquiry ? "New Asset Management Inquiry" : "New Contact Form Submission",
      html: emailContent,
      text: emailContent.replace(/<[^>]*>/g, ''), // Strip HTML for plain text version
    });

    console.log("Message sent: %s", info.messageId);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: 'Error sending email' });
  }
}