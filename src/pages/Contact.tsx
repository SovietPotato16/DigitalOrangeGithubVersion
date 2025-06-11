import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
    timeline: ''
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hola@digitalorangesites.com',
      description: 'Respuesta en menos de 2 horas'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      value: '+1 (555) 123-4567',
      description: 'Lunes a Viernes 9AM - 7PM'
    },
    {
      icon: MapPin,
      title: 'Oficina',
      value: 'Ciudad de México, México',
      description: 'Disponible para reuniones presenciales'
    },
    {
      icon: Clock,
      title: 'Horario',
      value: '9:00 AM - 7:00 PM',
      description: 'Zona horaria del centro (UTC-6)'
    }
  ];

  const projectTypes = [
    'Portafolio personal',
    'E-commerce',
    'Sitio corporativo',
    'Menú digital',
    'Landing page',
    'Blog/Revista',
    'Sistema de citas',
    'Otro'
  ];

  const budgetRanges = [
    '$299 - $499',
    '$500 - $899',
    '$900 - $1,499',
    '$1,500 - $2,999',
    '$3,000+'
  ];

  const timelines = [
    'Lo más pronto posible',
    'Esta semana',
    'Próximas 2 semanas',
    'Este mes',
    'No tengo prisa'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo en las próximas 2 horas.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      budget: '',
      message: '',
      timeline: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Contáctanos</h1>
          <p className="text-xl text-gray-400">
            Estamos aquí para ayudarte a hacer realidad tu proyecto
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form - Takes 2 columns */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/30 transition-all hover:shadow-[0_8px_30px_rgb(255,107,53,0.1)]"
            >
              <form
                action="https://formspree.io/f/hola@digitalorange.com.mx"
                method="POST"
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Empresa (opcional)
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 transition-colors"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 transition-colors"
                    placeholder="Tu número de teléfono"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Servicio de interés
                  </label>
                  <select
                    name="service"
                    id="service"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 transition-colors"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="website">Sitio web tradicional</option>
                    <option value="ecommerce">Tienda en línea</option>
                    <option value="small-business">Pequeños negocios</option>
                    <option value="enterprise">Sistemas empresariales</option>
                    <option value="professional">Servicios profesionales</option>
                    <option value="special">Servicios especiales</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 transition-colors resize-none"
                    placeholder="¿Cómo podemos ayudarte?"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  >
                    Enviar mensaje
                  </button>
                </div>
              </form>
            </motion.div>
          </div>

          {/* Contact Cards - Takes 1 column */}
          <div className="flex flex-col justify-start gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/30 transition-all hover:shadow-[0_8px_30px_rgb(255,107,53,0.1)] group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Llámanos</h3>
              <p className="text-gray-400 mb-3 text-sm">
                Disponibles de Lunes a Viernes de 9:00 a 18:00
              </p>
              <a
                href="tel:+525512345678"
                className="text-orange-400 hover:text-orange-500 transition-colors font-medium"
              >
                +52 (55) 1234-5678
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/30 transition-all hover:shadow-[0_8px_30px_rgb(255,107,53,0.1)] group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Escríbenos</h3>
              <p className="text-gray-400 mb-3 text-sm">
                Te responderemos en menos de 24 horas
              </p>
              <a
                href="mailto:contacto@digitalorange.com"
                className="text-orange-400 hover:text-orange-500 transition-colors font-medium"
              >
                contacto@digitalorange.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/30 transition-all hover:shadow-[0_8px_30px_rgb(255,107,53,0.1)] group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Chat en vivo</h3>
              <p className="text-gray-400 mb-3 text-sm">
                Respuesta inmediata en horario laboral
              </p>
              <button className="text-orange-400 hover:text-orange-500 transition-colors font-medium">
                Iniciar chat
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;