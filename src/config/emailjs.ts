// EmailJS Configuration
// Replace these values with your actual EmailJS credentials
// You can get these from https://www.emailjs.com/

export const emailjsConfig = {
  serviceId: 'service_rsu22f5', // Your EmailJS service ID
  templateId: 'template_aj3so03', // Your EmailJS template ID
  publicKey: 'enxzitzhsnhmdXI49', // Your EmailJS public key
};

// Test function to verify EmailJS configuration
export const testEmailJS = async () => {
  try {
    const { serviceId, templateId, publicKey } = emailjsConfig;
    
    console.log('Testing EmailJS configuration:');
    console.log('Service ID:', serviceId);
    console.log('Template ID:', templateId);
    console.log('Public Key:', publicKey);
    
    // You can call this function from browser console to test
    return { serviceId, templateId, publicKey };
  } catch (error) {
    console.error('EmailJS test failed:', error);
    return null;
  }
};

// Example of how to get these values:
// 1. Sign up at https://www.emailjs.com/
// 2. Create an email service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Get your public key from Account > API Keys
// 5. Replace the values above with your actual credentials 