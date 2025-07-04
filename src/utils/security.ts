// Security utilities for content validation and XSS prevention

/**
 * Validates if content contains dangerous patterns
 * @param content - The content to validate
 * @returns true if content is safe, false if dangerous patterns found
 */
export const validateContent = (content: string): boolean => {
  const dangerousPatterns = [
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi,
    /<iframe\b/gi,
    /<object\b/gi,
    /<embed\b/gi,
    /<form\b/gi,
    /<input\b/gi,
    /<textarea\b/gi,
    /<select\b/gi,
    /<button\b/gi,
    /<link\b/gi,
    /<meta\b/gi,
    /<style\b/gi,
    /vbscript:/gi,
    /data:text\/html/gi,
    /data:application\/javascript/gi
  ];
  
  return !dangerousPatterns.some(pattern => pattern.test(content));
};

/**
 * Sanitizes HTML content using DOMPurify with custom configuration
 * @param content - The HTML content to sanitize
 * @returns Sanitized HTML content
 */
export const sanitizeHTML = (content: string): string => {
  // Import DOMPurify dynamically to avoid SSR issues
  if (typeof window !== 'undefined') {
    const DOMPurify = require('dompurify');
    
    return DOMPurify.sanitize(content, {
      ALLOWED_TAGS: [
        'p', 'br', 'strong', 'em', 'u', 's', 'mark', 'small', 'del', 'ins',
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'ul', 'ol', 'li', 'dl', 'dt', 'dd',
        'blockquote', 'pre', 'code', 'kbd', 'samp', 'var',
        'a', 'img', 'figure', 'figcaption',
        'table', 'thead', 'tbody', 'tfoot', 'tr', 'td', 'th',
        'div', 'span', 'section', 'article', 'header', 'footer',
        'aside', 'nav', 'main', 'address', 'time'
      ],
      ALLOWED_ATTR: [
        'href', 'src', 'alt', 'title', 'width', 'height',
        'class', 'id', 'style', 'target', 'rel',
        'datetime', 'cite', 'lang', 'dir'
      ],
      ALLOWED_URI_REGEXP: /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
      FORBID_TAGS: ['script', 'style', 'iframe', 'object', 'embed', 'form', 'input', 'textarea', 'select', 'button'],
      FORBID_ATTR: ['onerror', 'onload', 'onclick', 'onmouseover', 'onfocus', 'onblur', 'onchange', 'onsubmit', 'onreset', 'onselect', 'onunload', 'onabort', 'onbeforeunload', 'onerror', 'onhashchange', 'onmessage', 'onoffline', 'ononline', 'onpagehide', 'onpageshow', 'onpopstate', 'onresize', 'onstorage']
    });
  }
  
  // Fallback for SSR - remove all HTML tags
  return content.replace(/<[^>]*>/g, '');
};

/**
 * Validates form data for potential security issues
 * @param formData - The form data to validate
 * @returns Validation result with errors if any
 */
export const validateFormData = (formData: Record<string, any>): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  // Check for script injection attempts
  const scriptPatterns = [
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi
  ];
  
  Object.entries(formData).forEach(([key, value]) => {
    if (typeof value === 'string') {
      scriptPatterns.forEach(pattern => {
        if (pattern.test(value)) {
          errors.push(`Field "${key}" contains potentially dangerous content`);
        }
      });
    }
  });
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Validates URL for security
 * @param url - The URL to validate
 * @returns true if URL is safe, false otherwise
 */
export const validateURL = (url: string): boolean => {
  try {
    const urlObj = new URL(url);
    const allowedProtocols = ['http:', 'https:', 'mailto:', 'tel:'];
    
    return allowedProtocols.includes(urlObj.protocol);
  } catch {
    return false;
  }
};

/**
 * Escapes HTML special characters
 * @param text - The text to escape
 * @returns Escaped text
 */
export const escapeHTML = (text: string): string => {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}; 