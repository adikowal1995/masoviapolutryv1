# Contact Form Setup Guide

This guide will help you set up the contact form to send emails using EmailJS.

## Prerequisites

1. An EmailJS account (free tier available)
2. An email service (Gmail, Outlook, etc.)

## Step-by-Step Setup

### 1. Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down the **Service ID** (you'll need this later)

### 3. Fix Gmail API Authentication Scopes (If using Gmail)

If you're using Gmail and get the error "412 Gmail_API: Request had insufficient authentication scopes", follow these steps:

1. **Go to your EmailJS dashboard**
2. **Navigate to "Email Services"**
3. **Find your Gmail service and click "Edit"**
4. **Click "Reconnect" or "Update Permissions"**
5. **Make sure to grant these permissions:**
   - Send emails on your behalf
   - Read and send emails
   - Manage your Gmail settings

**Alternative Solution:**
If the above doesn't work, try these steps:

1. **Delete the existing Gmail service**
2. **Create a new Gmail service**
3. **When connecting, make sure to:**
   - Check all permission boxes
   - Allow access to your Gmail account
   - Accept all requested permissions

**If still having issues:**
- Try using a different email service (Outlook, Yahoo, etc.)
- Or use the "Custom SMTP" option with your Gmail SMTP settings

### 4. Create Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template content:

```html
Subject: New Contact Form Submission - {{from_name}}

Hello Masovia Poultry Team,

You have received a new contact form submission:

**Contact Information:**
- Name: {{from_name}}
- Company: {{company}}
- Email: {{from_email}}
- Phone: {{phone}}
- Country: {{country}}

**Product Interest:**
- Product Type: {{product_type}}
- Quantity: {{quantity}}

**Message:**
{{message}}

**Newsletter Subscription:**
{{newsletter}}

Best regards,
{{from_name}}
```

4. Save the template and note down the **Template ID**

### 5. Get API Key

1. Go to "Account" > "API Keys"
2. Copy your **Public Key**

### 6. Update Configuration

1. Open `src/config/emailjs.ts`
2. Replace the placeholder values with your actual credentials:

```typescript
export const emailjsConfig = {
  serviceId: 'your_service_id_here',
  templateId: 'your_template_id_here', 
  publicKey: 'your_public_key_here',
};
```

### 7. Test the Form

1. Start your development server: `npm run dev`
2. Fill out the contact form
3. Submit and check if you receive the email

## Alternative Setup Options

### Option 1: Environment Variables (Recommended for Production)

Create a `.env` file in your project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Then update `src/config/emailjs.ts`:

```typescript
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};
```

### Option 2: Use Different Email Service

If Gmail continues to give issues, try these alternatives:

**Outlook/Hotmail:**
- Often more reliable than Gmail
- Less strict API limitations

**Yahoo Mail:**
- Good alternative to Gmail
- Usually works without authentication issues

**Custom SMTP:**
- Use your own SMTP server
- More control over email delivery

### Option 3: Netlify Forms (If using Netlify)

If you're deploying to Netlify, you can use their built-in form handling:

1. Add `data-netlify="true"` to your form
2. Add a hidden input: `<input type="hidden" name="form-name" value="contact" />`
3. Remove EmailJS integration
4. Forms will be handled automatically by Netlify

### Option 4: Formspree

1. Go to [https://formspree.io/](https://formspree.io/)
2. Create a new form
3. Replace the form action with your Formspree endpoint
4. Remove EmailJS integration

## Troubleshooting

### Common Issues

1. **"Service not found" error**: Check your Service ID
2. **"Template not found" error**: Check your Template ID  
3. **"Invalid API key" error**: Check your Public Key
4. **"412 Gmail_API: Request had insufficient authentication scopes"**: See Gmail setup section above
5. **Emails not sending**: Check your email service configuration

### Gmail-Specific Issues

- **Two-factor authentication**: Make sure it's enabled on your Gmail account
- **App passwords**: If using 2FA, you might need to generate an app password
- **Less secure apps**: Enable "Less secure app access" in Gmail settings (if not using 2FA)

### Testing

- Use the EmailJS dashboard to test your service and template
- Check browser console for error messages
- Verify all credentials are correct

## Security Notes

- Never commit your actual EmailJS credentials to version control
- Use environment variables for production deployments
- The public key is safe to expose in frontend code
- Consider rate limiting for production use

## Support

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Community: [https://community.emailjs.com/](https://community.emailjs.com/)
- Gmail API Documentation: [https://developers.google.com/gmail/api](https://developers.google.com/gmail/api) 