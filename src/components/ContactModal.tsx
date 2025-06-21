import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Mail, Phone, MessageSquare, Building, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Interface para la información del plan seleccionado
interface PlanInfo {
  planName: string;
  planCategory: string;
  planPrice: number;
  billingType: 'monthly' | 'annual';
  ctaText: string;
}

// Props del componente modal
interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  planInfo: PlanInfo | null;
}

// Interface para los datos del formulario
interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, planInfo }) => {
  // Estado para los datos del formulario
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  // Estado para el envío del formulario
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Función para manejar cambios en los inputs
  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Función para enviar el formulario a Formspree
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Preparar datos para enviar incluyendo información del plan
      const submitData = {
        ...formData,
        planName: planInfo?.planName || 'No especificado',
        planCategory: planInfo?.planCategory || 'No especificado',
        planPrice: planInfo?.planPrice || 0,
        billingType: planInfo?.billingType || 'monthly',
        ctaPressed: planInfo?.ctaText || 'No especificado',
        formattedMessage: `
Plan seleccionado: ${planInfo?.planName} (${planInfo?.planCategory})
Precio: $${planInfo?.planPrice?.toLocaleString('es-MX')} MXN/${planInfo?.billingType === 'annual' ? 'año' : 'mes'}
CTA presionado: ${planInfo?.ctaText}

Mensaje del cliente:
${formData.message}
        `.trim()
      };

      // Enviar a Formspree
      const response = await fetch('https://formspree.io/f/myzjdnao', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        // Resetear formulario después de 3 segundos
        setTimeout(() => {
          setSubmitSuccess(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            message: ''
          });
          onClose();
        }, 3000);
      } else {
        throw new Error('Error al enviar el formulario');
      }
    } catch (error) {
      setSubmitError('Hubo un error al enviar tu solicitud. Por favor, intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Función para cerrar el modal
  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
      // Resetear estados después de cerrar
      setTimeout(() => {
        setSubmitSuccess(false);
        setSubmitError('');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        });
      }, 300);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-gray-900 rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del modal */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white">Solicitar Información</h2>
                {planInfo && (
                  <p className="text-orange-400 text-sm mt-1">
                    {planInfo.planName} - {planInfo.planCategory}
                  </p>
                )}
              </div>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-white transition-colors"
                disabled={isSubmitting}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Información del plan seleccionado */}
            {planInfo && (
              <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-4 h-4 text-orange-400" />
                  <span className="text-white font-medium">Plan Seleccionado</span>
                </div>
                <p className="text-orange-300 text-sm">
                  {planInfo.planName} - ${planInfo.planPrice.toLocaleString('es-MX')} MXN/
                  {planInfo.billingType === 'annual' ? 'año' : 'mes'}
                </p>
              </div>
            )}

            {/* Formulario */}
            {submitSuccess ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">¡Solicitud Enviada!</h3>
                <p className="text-gray-400">
                  Nos pondremos en contacto contigo pronto para discutir tu proyecto.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Campo Nombre */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nombre completo *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 transition-colors"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                </div>

                {/* Campo Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Correo electrónico *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                {/* Campo Teléfono */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Teléfono
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 transition-colors"
                      placeholder="+52 123 456 7890"
                    />
                  </div>
                </div>

                {/* Campo Empresa */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Empresa/Negocio
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 transition-colors"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>

                {/* Campo Mensaje */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Mensaje adicional
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 transition-colors resize-none"
                      placeholder="Cuéntanos más sobre tu proyecto o necesidades específicas..."
                    />
                  </div>
                </div>

                {/* Error message */}
                {submitError && (
                  <div className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                    {submitError}
                  </div>
                )}

                {/* Botones */}
                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleClose}
                    disabled={isSubmitting}
                    className="flex-1 border-white/20 text-white hover:bg-white/10"
                  >
                    Cancelar
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-lg hover:shadow-orange-500/25"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Enviar Solicitud
                      </div>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal; 