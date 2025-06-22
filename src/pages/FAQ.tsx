import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "¿Cuánto tiempo toma desarrollar un sitio web?",
      answer: "Nuestro proceso optimizado nos permite entregar sitios web profesionales en tan solo 48 horas. Sin embargo, el tiempo exacto puede variar según la complejidad y requisitos específicos del proyecto."
    },
    {
      question: "¿Qué incluye el servicio de desarrollo web?",
      answer: "Nuestro servicio incluye diseño personalizado, desarrollo responsive, optimización SEO básica, integración de analytics, formularios de contacto, y hasta 5 páginas de contenido. También ofrecemos hosting y soporte técnico continuo."
    },
    {
      question: "¿Puedo actualizar mi sitio web después del lanzamiento?",
      answer: "¡Sí! Proporcionamos un panel de administración intuitivo para que puedas actualizar contenido. También ofrecemos planes de mantenimiento para cambios más complejos y actualizaciones técnicas."
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos transferencias bancarias, tarjetas de crédito/débito, y PayPal. Ofrecemos planes de pago flexibles para proyectos más grandes."
    },
    {
      question: "¿Ofrecen servicios de mantenimiento?",
      answer: "Sí, ofrecemos planes de mantenimiento mensual que incluyen actualizaciones de seguridad, backups, modificaciones menores y soporte técnico prioritario."
    },
    {
      question: "¿Puedo migrar mi sitio web existente?",
      answer: "Sí, ofrecemos servicios de migración web completa, incluyendo todo el contenido, bases de datos y configuraciones, asegurando una transición sin problemas."
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Preguntas Frecuentes
          </h1>
          <p className="text-xl text-gray-400">
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="text-lg font-medium text-white">{item.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-400">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Botón flotante de WhatsApp */}
      <WhatsAppButton />
    </div>
  );
};

export default FAQ; 