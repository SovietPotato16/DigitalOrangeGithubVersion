// Secure logging utility - only logs in development
const isDevelopment = import.meta.env.DEV;

export const logger = {
  log: (...args: any[]) => {
    if (isDevelopment) {
      console.log(...args);
    }
  },
  
  error: (...args: any[]) => {
    if (isDevelopment) {
      console.error(...args);
    }
    // In production, you could send to a monitoring service
    // Example: sendToMonitoringService('error', args);
  },
  
  warn: (...args: any[]) => {
    if (isDevelopment) {
      console.warn(...args);
    }
  },
  
  info: (...args: any[]) => {
    if (isDevelopment) {
      console.info(...args);
    }
  }
};

// Helper for form validation errors
export const logFormError = (formName: string, error: any) => {
  logger.error(`Form submission error in ${formName}:`, error);
};

// Helper for API errors
export const logApiError = (endpoint: string, error: any) => {
  logger.error(`API error for ${endpoint}:`, error);
}; 