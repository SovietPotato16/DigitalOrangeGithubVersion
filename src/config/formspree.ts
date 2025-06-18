// Formspree Configuration for Static Site
// Replace this with your actual Formspree form ID after creating your form

/**
 * SETUP INSTRUCTIONS:
 * 
 * 1. Go to https://formspree.io and create a free account
 * 2. Create a new form with these settings:
 *    - Email: hola@digitalorange.com.mx
 *    - Form Name: "Digital Orange Contact Forms"
 * 3. Copy your form ID from the Formspree dashboard
 * 4. Replace 'YOUR_FORM_ID' below with your actual form ID
 * 
 * Example: If your endpoint is https://formspree.io/f/xvgpzmjq
 * Then FORMSPREE_FORM_ID should be 'xvgpzmjq'
 */

export const FORMSPREE_CONFIG = {
  // Replace with your actual Formspree form ID
  FORM_ID: 'xnnvzdwg',
  
  // Full endpoint URL
  get ENDPOINT() {
    return `https://formspree.io/f/${this.FORM_ID}`;
  },
  
  // Email settings
  RECIPIENT_EMAIL: 'hola@digitalorange.com.mx',
  FROM_NAME: 'Digital Orange Sites',
  
  // Form validation settings
  REQUIRED_FIELDS: {
    PROJECT_WIZARD: ['email'],
    CONTACT_FORM: ['name', 'email', 'phone', 'service', 'message']
  }
};

// Alternative: Direct email configuration (if you want to use mailto fallback)
export const FALLBACK_EMAIL = {
  recipient: 'hola@digitalorange.com.mx',
  subject: 'Nuevo mensaje desde Digital Orange Sites',
  
  // Generate mailto link for fallback
  generateMailto: (subject: string, body: string) => {
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    return `mailto:${FALLBACK_EMAIL.recipient}?subject=${encodedSubject}&body=${encodedBody}`;
  }
};

// Validation helper
export const validateFormspreeConfig = () => {
  if (FORMSPREE_CONFIG.FORM_ID === 'YOUR_FORM_ID') {
    console.warn('⚠️ Formspree not configured! Please update FORM_ID in src/config/formspree.ts');
    return false;
  }
  return true;
}; 