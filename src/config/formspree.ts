// Formspree Configuration for Static Site
// Replace this with your actual Formspree form ID after creating your form

/**
 * SETUP INSTRUCTIONS:
 * 
 * 1. Go to https://formspree.io and create a free account
 * 2. Create TWO separate forms:
 *    
 *    FORM 1 - Project Wizard:
 *    - Email: hola@digitalorange.com.mx
 *    - Form Name: "Digital Orange Project Wizard"
 *    - Form ID: xnnvzdwg
 *    
 *    FORM 2 - Contact Page:
 *    - Email: hola@digitalorange.com.mx  
 *    - Form Name: "Digital Orange Contact Form"
 *    - Form ID: xyzjpwvv
 * 
 * 3. Each form will have its own endpoint and will handle different data structures
 * 4. This prevents spam detection issues from mixing different field structures
 */

export const FORMSPREE_CONFIG = {
  // Form IDs for different forms
  PROJECT_WIZARD_FORM_ID: 'xnnvzdwg',
  CONTACT_FORM_ID: 'xyzjpwvv',
  
  // Endpoints for each form type
  get PROJECT_WIZARD_ENDPOINT() {
    return `https://formspree.io/f/${this.PROJECT_WIZARD_FORM_ID}`;
  },
  
  get CONTACT_FORM_ENDPOINT() {
    return `https://formspree.io/f/${this.CONTACT_FORM_ID}`;
  },
  
  // Legacy endpoint (for backward compatibility)
  get ENDPOINT() {
    return this.PROJECT_WIZARD_ENDPOINT;
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
  if (FORMSPREE_CONFIG.PROJECT_WIZARD_FORM_ID === 'YOUR_FORM_ID' || 
      FORMSPREE_CONFIG.CONTACT_FORM_ID === 'YOUR_FORM_ID') {
    console.warn('⚠️ Formspree not configured! Please update form IDs in src/config/formspree.ts');
    return false;
  }
  return true;
}; 