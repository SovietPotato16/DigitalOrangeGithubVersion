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
    // Use Formspree to send emails to the configured recipient
    const response = await fetch(FORMSPREE_CONFIG.ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email: emailData.from || 'noreply@digitalorange.com.mx',
        message: emailData.html,
        subject: emailData.subject,
        _replyto: emailData.from || 'noreply@digitalorange.com.mx',
        _subject: emailData.subject,
        _template: 'basic'
      }),
    });

    if (!response.ok) {
      console.warn('Formspree request failed, using fallback...');
      return sendEmailFallback(emailData);
    }

    const result = await response.json();
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
    // Create plain text version of the email content
    const plainTextContent = emailData.html.replace(/<[^>]*>/g, '').replace(/\n\s*\n/g, '\n');
    
    // Generate mailto URL
    const mailtoUrl = FALLBACK_EMAIL.generateMailto(emailData.subject, plainTextContent);
    
    // Open mailto link
    window.open(mailtoUrl, '_blank');
    
    return true;
  } catch (error) {
    console.error('Error with fallback email method:', error);
    return false;
  }
};

// Function to generate HTML template for Project Wizard submissions
const generateProjectWizardEmailHTML = (formData: ProjectWizardFormData): string => {
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

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Nueva Consulta de Proyecto - Project Wizard</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #f97316; }
        .value { margin-top: 5px; }
        .features-list { list-style: none; padding: 0; }
        .features-list li { padding: 5px 0; border-bottom: 1px solid #eee; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🚀 Nueva Consulta de Proyecto</h1>
          <p>Recibido a través del Project Wizard</p>
        </div>
        
        <div class="content">
          <div class="field">
            <div class="label">📧 Email:</div>
            <div class="value">${formData.email}</div>
          </div>
          
          <div class="field">
            <div class="label">👤 Nombre:</div>
            <div class="value">${formData.name || 'No proporcionado'}</div>
          </div>
          
          <div class="field">
            <div class="label">📞 Teléfono:</div>
            <div class="value">${formData.phone || 'No proporcionado'}</div>
          </div>
          
          <div class="field">
            <div class="label">🏢 Empresa:</div>
            <div class="value">${formData.company || 'No proporcionado'}</div>
          </div>
          
          <div class="field">
            <div class="label">💼 Tipo de Proyecto:</div>
            <div class="value">${projectTypeNames[formData.projectType] || formData.projectType}</div>
          </div>
          
          <div class="field">
            <div class="label">📏 Escala del Proyecto:</div>
            <div class="value">${scaleNames[formData.scale] || formData.scale}</div>
          </div>
          
          <div class="field">
            <div class="label">⏰ Timeline:</div>
            <div class="value">${formData.timeline}</div>
          </div>
          
          <div class="field">
            <div class="label">💰 Presupuesto:</div>
            <div class="value">${formData.budget}</div>
          </div>
          
          ${formData.features.length > 0 ? `
          <div class="field">
            <div class="label">✨ Funcionalidades Seleccionadas:</div>
            <ul class="features-list">
              ${formData.features.map(feature => `<li>• ${feature}</li>`).join('')}
            </ul>
          </div>
          ` : ''}
          
          <div style="margin-top: 30px; padding: 15px; background: #fff; border-left: 4px solid #f97316;">
            <strong>🎯 Próximos Pasos:</strong><br>
            1. Revisar los requerimientos del proyecto<br>
            2. Preparar propuesta personalizada<br>
            3. Contactar al cliente en las próximas 2 horas<br>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Function to generate HTML template for Contact form submissions
const generateContactEmailHTML = (formData: ContactFormData): string => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Nuevo Mensaje de Contacto</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #f97316; }
        .value { margin-top: 5px; }
        .message-box { background: #fff; padding: 15px; border-radius: 6px; border-left: 4px solid #f97316; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>💬 Nuevo Mensaje de Contacto</h1>
          <p>Recibido desde el formulario de contacto</p>
        </div>
        
        <div class="content">
          <div class="field">
            <div class="label">📧 Email:</div>
            <div class="value">${formData.email}</div>
          </div>
          
          <div class="field">
            <div class="label">👤 Nombre:</div>
            <div class="value">${formData.name}</div>
          </div>
          
          <div class="field">
            <div class="label">📞 Teléfono:</div>
            <div class="value">${formData.phone}</div>
          </div>
          
          ${formData.company ? `
          <div class="field">
            <div class="label">🏢 Empresa:</div>
            <div class="value">${formData.company}</div>
          </div>
          ` : ''}
          
          <div class="field">
            <div class="label">🎯 Servicio de Interés:</div>
            <div class="value">${formData.service}</div>
          </div>
          
          <div class="field">
            <div class="label">💬 Mensaje:</div>
            <div class="message-box">${formData.message}</div>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background: #fff; border-left: 4px solid #f97316;">
            <strong>📞 Responder en menos de 24 horas</strong><br>
            Email: <a href="mailto:${formData.email}">${formData.email}</a><br>
            Teléfono: <a href="tel:${formData.phone}">${formData.phone}</a>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Export functions for Project Wizard form submission
export const submitProjectWizardForm = async (formData: ProjectWizardFormData): Promise<boolean> => {
  const emailData: EmailData = {
    to: EMAIL_CONFIG.recipientEmail,
    from: formData.email, // Use customer email as sender
    subject: `🚀 Nueva Consulta de Proyecto - ${formData.name || formData.email}`,
    html: generateProjectWizardEmailHTML(formData)
  };

  return await sendEmail(emailData);
};

// Export functions for Contact form submission
export const submitContactForm = async (formData: ContactFormData): Promise<boolean> => {
  const emailData: EmailData = {
    to: EMAIL_CONFIG.recipientEmail,
    from: formData.email, // Use customer email as sender
    subject: `💬 Nuevo Mensaje de Contacto - ${formData.name}`,
    html: generateContactEmailHTML(formData)
  };

  return await sendEmail(emailData);
}; 