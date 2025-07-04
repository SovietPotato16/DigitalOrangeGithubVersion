// Email service for handling form submissions
import { FORMSPREE_CONFIG, FALLBACK_EMAIL, validateFormspreeConfig } from '@/config/formspree';
import { logger } from '@/utils/logger';

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
    logger.warn('⚠️ Formspree not configured. Using fallback method...');
    return sendEmailFallback(emailData);
  }

  try {
    logger.log('🚀 Sending email via Formspree...', {
      endpoint: FORMSPREE_CONFIG.PROJECT_WIZARD_ENDPOINT,
      subject: emailData.subject,
      from: emailData.from
    });

    // Use Formspree to send emails to the configured recipient
    const response = await fetch(FORMSPREE_CONFIG.PROJECT_WIZARD_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email: emailData.from || 'noreply@digitalorange.com.mx',
        message: emailData.html, // Now contains formatted plain text
        _replyto: emailData.from || 'noreply@digitalorange.com.mx',
        _subject: emailData.subject,
        // Anti-spam fields - provide more context to email providers
        _cc: 'hola@digitalorange.com.mx',
        _format: 'text',
        _language: 'es',
        _template: 'table'
      }),
    });

    logger.log('📡 Formspree response status:', response.status);
    logger.log('📋 Response headers:', Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      logger.error('❌ Formspree request failed:', response.status, response.statusText);
      const errorText = await response.text();
      logger.error('📄 Error details:', errorText);
      logger.warn('🔄 Using fallback method...');
      return sendEmailFallback(emailData);
    }

    const result = await response.json();
    logger.log('✅ Formspree response:', result);
    return result.ok || response.status === 200;
  } catch (error) {
    logger.error('Error sending email via Formspree:', error);
    logger.warn('Using fallback method...');
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
    logger.error('Error with fallback email method:', error);
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

// Special function for Contact form submission with form-data format (less likely to be spam)
export const submitContactForm = async (formData: ContactFormData): Promise<boolean> => {
  // Completar campos faltantes con valores por defecto para evitar spam
  const completeFormData: ContactFormData = {
    name: formData.name || 'No especificado',
    email: formData.email || 'no-especificado@cliente.com',
    phone: formData.phone || 'No especificado', 
    company: formData.company || 'No especificado',
    service: formData.service || 'Consulta general',
    message: formData.message || 'Solicitud de información general'
  };

  // Validar que tenemos los campos mínimos requeridos (después de completar)
  if (!completeFormData.name || !completeFormData.email || !completeFormData.phone || !completeFormData.service || !completeFormData.message) {
    logger.error('❌ Campos requeridos faltantes en formulario de contacto');
    return false;
  }

  // Check if Formspree is properly configured
  if (!validateFormspreeConfig()) {
    logger.warn('⚠️ Formspree not configured. Using fallback method...');
    const emailData: EmailData = {
      to: EMAIL_CONFIG.recipientEmail,
      from: formData.email,
      subject: `💬 Contacto Digital Orange - ${formData.name} - ${formData.service}`,
      html: generateContactEmailText(formData)
    };
    return sendEmailFallback(emailData);
  }

  try {
    logger.log('🚀 Sending contact form via Formspree...', {
      endpoint: FORMSPREE_CONFIG.CONTACT_FORM_ENDPOINT,
      name: formData.name,
      service: formData.service
    });

    // Use form-data format instead of JSON for contact forms (better spam detection)
    const response = await fetch(FORMSPREE_CONFIG.CONTACT_FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
        // No Content-Type header - let browser set it for form data
      },
      body: (() => {
        const form = new FormData();
        
        // Structured data fields for better spam detection
        form.append('name', formData.name);
        form.append('email', formData.email);
        form.append('phone', formData.phone);
        form.append('company', formData.company || '');
        form.append('service', formData.service);
        form.append('message', formData.message);
        
        // Formspree specific fields
        form.append('_replyto', formData.email);
        form.append('_subject', `💬 Contacto Digital Orange - ${formData.name} - ${formData.service}`);
        form.append('_format', 'text');
        form.append('_language', 'es');
        
        // Additional context to prevent spam
        form.append('_website', 'digitalorange.com.mx');
        form.append('_form_type', 'contact_form');
        form.append('_timestamp', new Date().toISOString());
        
        return form;
      })()
    });

    logger.log('📡 Formspree response status:', response.status);

    if (!response.ok) {
      logger.error('❌ Formspree request failed:', response.status, response.statusText);
      const errorText = await response.text();
      logger.error('📄 Error details:', errorText);
      logger.warn('🔄 Using fallback method...');
      
      const emailData: EmailData = {
        to: EMAIL_CONFIG.recipientEmail,
        from: formData.email,
        subject: `💬 Contacto Digital Orange - ${formData.name} - ${formData.service}`,
        html: generateContactEmailText(formData)
      };
      return sendEmailFallback(emailData);
    }

    const result = await response.json();
    logger.log('✅ Contact form response:', result);
    return result.ok || response.status === 200;
    
  } catch (error) {
    logger.error('Error sending contact form via Formspree:', error);
    logger.warn('Using fallback method...');
    
    const emailData: EmailData = {
      to: EMAIL_CONFIG.recipientEmail,
      from: formData.email,
      subject: `💬 Contacto Digital Orange - ${formData.name} - ${formData.service}`,
      html: generateContactEmailText(formData)
    };
    return sendEmailFallback(emailData);
  }
}; 