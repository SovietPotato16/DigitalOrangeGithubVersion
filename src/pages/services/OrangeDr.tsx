import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Calendar, FileText, Users, Shield, CreditCard, BarChart, Settings, Activity, Video, ArrowRight, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ComingSoonBanner from '@/components/ComingSoonBanner';
import WhatsAppButton from '@/components/WhatsAppButton';

const OrangeDr = () => {
  const features = [
    {
      icon: <Calendar className="h-6 w-6" />,
      title: 'Gestión de Citas',
      description: 'Sistema de citas en línea con recordatorios automáticos, confirmaciones por SMS/email y gestión inteligente de agenda para optimizar el tiempo.',
      image: '/images/services/appointment-management.jpg',
      benefits: [
        'Citas en línea',
        'Recordatorios automáticos',
        'Confirmaciones SMS/email',
        'Gestión de agenda'
      ]
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: 'Expedientes Digitales',
      description: 'Historial médico completo, notas de consulta, resultados de laboratorio y documentación digital segura y accesible.',
      image: '/images/services/digital-records.jpg',
      benefits: [
        'Historial médico completo',
        'Notas de consulta',
        'Resultados de laboratorio',
        'Documentación segura'
      ]
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Gestión de Pacientes',
      description: 'Base de datos de pacientes, historiales médicos, seguimiento de tratamientos y comunicación directa con pacientes.',
      image: '/images/services/patient-management.jpg',
      benefits: [
        'Base de datos de pacientes',
        'Historiales médicos',
        'Seguimiento de tratamientos',
        'Comunicación directa'
      ]
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Seguridad y Privacidad',
      description: 'Cumplimiento HIPAA, encriptación de datos, control de acceso y respaldos automáticos para proteger información sensible.',
      image: '/images/services/security-privacy.jpg',
      benefits: [
        'Cumplimiento HIPAA',
        'Encriptación de datos',
        'Control de acceso',
        'Respaldos automáticos'
      ]
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: 'Facturación Integrada',
      description: 'Facturación automática, gestión de pagos, procesamiento de seguros y reportes financieros detallados.',
      image: '/images/services/billing.jpg',
      benefits: [
        'Facturación automática',
        'Gestión de pagos',
        'Procesamiento de seguros',
        'Reportes financieros'
      ]
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: 'Análisis y Reportes',
      description: 'Estadísticas de consultas, reportes de pacientes, análisis de tratamientos y métricas de rendimiento.',
      image: '/images/services/analytics.jpg',
      benefits: [
        'Estadísticas de consultas',
        'Reportes de pacientes',
        'Análisis de tratamientos',
        'Métricas de rendimiento'
      ]
    }
  ];

  const process = [
    {
      title: 'Descubrimiento',
      description: 'Analizamos tus necesidades específicas, flujos de trabajo actuales y objetivos para personalizar la solución.',
      image: '/images/Sites/Discovery.svg'
    },
    {
      title: 'Configuración',
      description: 'Implementamos el sistema adaptado a tu práctica, configurando módulos y funcionalidades según tus necesidades.',
      image: '/images/Sites/design.svg'
    },
    {
      title: 'Capacitación',
      description: 'Entrenamos a tu equipo en el uso del sistema, asegurando una transición suave y efectiva.',
      image: '/images/Sites/Implementacion.svg'
    },
    {
      title: 'Soporte Continuo',
      description: 'Brindamos soporte técnico permanente y actualizaciones para mantener tu sistema funcionando óptimamente.',
      image: '/images/Sites/Optimizacion.svg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-red-400/10 to-pink-500/10 rounded-full blur-xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center">
                <Stethoscope className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">
                OrangeDr
              </span>
              <br />
              <span className="bg-gradient-to-r from-red-400 to-pink-600 bg-clip-text text-transparent">
                Gestión Médica Inteligente
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
              Optimiza tu práctica médica con nuestro sistema integral de gestión. 
              Simplifica la administración, mejora la atención al paciente y haz crecer 
              tu consultorio con tecnología de vanguardia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-red-500 to-pink-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                asChild
              >
                <Link to="/contact">
                  <span>Agendar Demo</span>
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Link>
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-red-500/30 text-white font-bold py-4 px-8 rounded-full text-xl hover:bg-red-500/10 transition-all duration-300"
                asChild
              >
                <Link to="/portfolio">
                  <span>Ver Casos de Éxito</span>
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <ComingSoonBanner />

      {/* Features Section */}
      <section className="py-20 bg-gray-900/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-red-500/10 text-red-400 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-400 text-lg mb-6">{feature.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="relative rounded-2xl overflow-hidden aspect-video bg-white/10 group">
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <Eye className="w-12 h-12 text-red-400 mb-2" />
                      <span className="text-white font-medium">Próximamente</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Nuestro Proceso
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Un enfoque estructurado para implementar OrangeDr en tu práctica
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden aspect-video mb-6 bg-white flex items-center justify-center p-8">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-32 h-32 object-contain"
                  />
                  <div className="absolute top-4 left-4 text-3xl font-bold text-red-400 bg-white/90 rounded-lg px-2 py-1">
                    0{index + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-900/50 to-pink-900/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              ¿Listo para Optimizar tu Práctica Médica?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Agenda una consulta gratuita y descubre cómo OrangeDr puede ayudarte a 
              mejorar la eficiencia de tu consultorio y la calidad de atención a tus pacientes.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-red-500 to-pink-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              asChild
            >
              <Link to="/contact">
                <span>Agendar Consulta Gratuita</span>
                <ArrowRight className="w-6 h-6 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Botón flotante de WhatsApp */}
      <WhatsAppButton />
    </div>
  );
};

export default OrangeDr; 