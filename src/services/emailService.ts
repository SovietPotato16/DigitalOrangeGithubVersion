// Email service for handling form submissions
import { FORMSPREE_CONFIG, FALLBACK_EMAIL, validateFormspreeConfig } from '@/config/formspree';

interface EmailData {
  to: string;
  subject: string;
  html: string;
  from?: string;
}

interface ProjectWizardFormData {
  projectType: string;
  scale: string;
  features: string[];
  timeline: string;
  budget: string;
  email: string;
  name: string;
  phone: string;
  company: string;
}

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  message: string;
}

// Configuration for email sending
const EMAIL_CONFIG = {
  recipientEmail: 'hola@digitalorange.com.mx',
  fromEmail: 'noreply@digitalorange.com.mx'
};



// Function to send email using Formspree service
const sendEmail = async (emailData: EmailData): Promise<boolean> => {
  // Check if Formspree is properly configured
  if (!validateFormspreeConfig()) {
    console.warn('⚠️ Formspree not configured. Using fallback method...');
    return sendEmailFallback(emailData);
  }

  try {
    console.log('🚀 Sending email via Formspree...', {
      endpoint: FORMSPREE_CONFIG.ENDPOINT,
      subject: emailData.subject,
      from: emailData.from
    });

    // Use Formspree to send emails to the configured recipient
    const response = await fetch(FORMSPREE_CONFIG.ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email: emailData.from || 'noreply@digitalorange.com.mx',
        message: emailData.html, // Now contains formatted plain text
        _replyto: emailData.from || 'noreply@digitalorange.com.mx',
        _subject: emailData.subject
      }),
    });

    console.log('📡 Formspree response status:', response.status);
    console.log('📋 Response headers:', Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      console.error('❌ Formspree request failed:', response.status, response.statusText);
      const errorText = await response.text();
      console.error('📄 Error details:', errorText);
      console.warn('🔄 Using fallback method...');
      return sendEmailFallback(emailData);
    }

    const result = await response.json();
    console.log('✅ Formspree response:', result);
    return result.ok || response.status === 200;
  } catch (error) {
    console.error('Error sending email via Formspree:', error);
    console.warn('Using fallback method...');
    return sendEmailFallback(emailData);
  }
};

// Fallback function using mailto (always works)
const sendEmailFallback = (emailData: EmailData): boolean => {
  try {
    // Generate mailto URL (emailData.html now contains formatted plain text)
    const mailtoUrl = FALLBACK_EMAIL.generateMailto(emailData.subject, emailData.html);
    
    // Open mailto link
    window.open(mailtoUrl, '_blank');
    
    return true;
  } catch (error) {
    console.error('Error with fallback email method:', error);
    return false;
  }
};

// Function to generate formatted plain text for Project Wizard submissions
const generateProjectWizardEmailText = (formData: ProjectWizardFormData): string => {
  const projectTypeNames: Record<string, string> = {
    'website': 'Sitio Web',
    'website_ecommerce': 'Sitio Web + E-commerce',
    'medical': 'Sistema para Consultorios Médicos',
    'legal': 'Sistema para Despachos Jurídicos',
    'dental': 'Sistema para Clínicas Dentales',
    'enterprise': 'Sistema Empresarial'
  };

  const scaleNames: Record<string, string> = {
    'small_business': 'Pequeño negocio',
    'small_company': 'Empresa pequeña',
    'medium_company': 'Empresa mediana',
    'startup': 'Startup'
  };

  const timelineNames: Record<string, string> = {
    'urgent': 'Urgente (48h)',
    'normal': 'Normal (2-4 semanas)',
    'custom': 'Personalizado'
  };

  const budgetNames: Record<string, string> = {
    'small': '$1,000 - $3,000',
    'medium': '$3,000 - $7,000',
    'large': '$7,000 - $15,000',
    'enterprise': '$15,000+'
  };

  return `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚀 NUEVA CONSULTA DE PROYECTO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Recibido a través del Project Wizard

📋 INFORMACIÓN DE CONTACTO
────────────────────────────────────────────────────
📧 Email: ${formData.email}
👤 Nombre: ${formData.name || 'No proporcionado'}
📞 Teléfono: ${formData.phone || 'No proporcionado'}
🏢 Empresa: ${formData.company || 'No proporcionado'}

💼 DETALLES DEL PROYECTO
────────────────────────────────────────────────────
🎯 Tipo de Proyecto: ${projectTypeNames[formData.projectType] || formData.projectType}
📏 Escala del Proyecto: ${scaleNames[formData.scale] || formData.scale}
⏰ Timeline: ${timelineNames[formData.timeline] || formData.timeline}
💰 Presupuesto: ${budgetNames[formData.budget] || formData.budget}

${formData.features.length > 0 ? `✨ FUNCIONALIDADES SELECCIONADAS
────────────────────────────────────────────────────
${formData.features.map(feature => `  • ${feature}`).join('\n')}

` : ''}🎯 PRÓXIMOS PASOS
────────────────────────────────────────────────────
1. Revisar los requerimientos del proyecto
2. Preparar propuesta personalizada
3. Contactar al cliente en las próximas 2 horas

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📧 Email enviado automáticamente desde Digital Orange Sites
🌐 https://digitalorange.com.mx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;
};

// Function to generate formatted plain text for Contact form submissions
const generateContactEmailText = (formData: ContactFormData): string => {
  return `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💬 NUEVO MENSAJE DE CONTACTO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Recibido desde el formulario de contacto

📋 INFORMACIÓN DE CONTACTO
────────────────────────────────────────────────────
📧 Email: ${formData.email}
👤 Nombre: ${formData.name}
📞 Teléfono: ${formData.phone}${formData.company ? `
🏢 Empresa: ${formData.company}` : ''}

🎯 CONSULTA
────────────────────────────────────────────────────
🛠️ Servicio de Interés: ${formData.service}

💬 MENSAJE:
────────────────────────────────────────────────────
${formData.message}

📞 INFORMACIÓN PARA RESPUESTA
────────────────────────────────────────────────────
✦ Responder en menos de 24 horas ✦

📧 Email: ${formData.email}
📞 Teléfono: ${formData.phone}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📧 Email enviado automáticamente desde Digital Orange Sites
🌐 https://digitalorange.com.mx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;
};

// Export functions for Project Wizard form submission
export const submitProjectWizardForm = async (formData: ProjectWizardFormData): Promise<boolean> => {
  const emailData: EmailData = {
    to: EMAIL_CONFIG.recipientEmail,
    from: formData.email, // Use customer email as sender
    subject: `🚀 Nueva Consulta de Proyecto - ${formData.name || formData.email}`,
    html: generateProjectWizardEmailText(formData)
  };

  return await sendEmail(emailData);
};

// Export functions for Contact form submission
export const submitContactForm = async (formData: ContactFormData): Promise<boolean> => {
  const emailData: EmailData = {
    to: EMAIL_CONFIG.recipientEmail,
    from: formData.email, // Use customer email as sender
    subject: `💬 Nuevo Mensaje de Contacto - ${formData.name}`,
    html: generateContactEmailText(formData)
  };

  return await sendEmail(emailData);
}; 