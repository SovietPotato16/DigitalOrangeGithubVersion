import React from 'react';
import { motion } from 'framer-motion';
import { Scale, FileText, Users, Shield, Calendar, BarChart, Settings, MessageSquare, Search, ArrowRight, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ComingSoonBanner from '@/components/ComingSoonBanner';

const OrangeLic = () => {
  const features = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: 'Gestión de Casos',
      description: 'Sistema completo para el seguimiento de casos, documentos legales, plazos y audiencias con recordatorios automáticos.',
      image: '/images/services/case-management.jpg',
      benefits: [
        'Seguimiento de casos',
        'Documentos legales',
        'Gestión de plazos',
        'Recordatorios automáticos'
      ]
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Gestión de Clientes',
      description: 'Base de datos de clientes, historiales de casos, comunicación integrada y seguimiento de relaciones con clientes.',
      image: '/images/services/client-management.jpg',
      benefits: [
        'Base de datos de clientes',
        'Historiales de casos',
        'Comunicación integrada',
        'Seguimiento de relaciones'
      ]
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: 'Agenda y Audiencias',
      description: 'Calendario integrado, gestión de audiencias, recordatorios automáticos y sincronización con dispositivos móviles.',
      image: '/images/services/calendar.jpg',
      benefits: [
        'Calendario integrado',
        'Gestión de audiencias',
        'Recordatorios automáticos',
        'Sincronización móvil'
      ]
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Seguridad y Confidencialidad',
      description: 'Protección de datos sensibles, control de acceso, encriptación y cumplimiento con regulaciones de privacidad.',
      image: '/images/services/security.jpg',
      benefits: [
        'Protección de datos',
        'Control de acceso',
        'Encriptación',
        'Cumplimiento normativo'
      ]
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: 'Análisis y Reportes',
      description: 'Estadísticas de casos, reportes financieros, análisis de rendimiento y métricas de productividad.',
      image: '/images/services/analytics.jpg',
      benefits: [
        'Estadísticas de casos',
        'Reportes financieros',
        'Análisis de rendimiento',
        'Métricas de productividad'
      ]
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: 'Comunicación Integrada',
      description: 'Sistema de mensajería interna, notificaciones automáticas y comunicación segura con clientes y colegas.',
      image: '/images/services/communication.jpg',
      benefits: [
        'Mensajería interna',
        'Notificaciones automáticas',
        'Comunicación segura',
        'Colaboración en equipo'
      ]
    }
  ];

  const process = [
    {
      title: 'Descubrimiento',
      description: 'Analizamos tus necesidades específicas, flujos de trabajo actuales y objetivos para personalizar la solución.',
      image: '/images/services/discovery-process.jpg'
    },
    {
      title: 'Configuración',
      description: 'Implementamos el sistema adaptado a tu bufete, configurando módulos y funcionalidades según tus necesidades.',
      image: '/images/services/setup-process.jpg'
    },
    {
      title: 'Capacitación',
      description: 'Entrenamos a tu equipo en el uso del sistema, asegurando una transición suave y efectiva.',
      image: '/images/services/training-process.jpg'
    },
    {
      title: 'Soporte Continuo',
      description: 'Brindamos soporte técnico permanente y actualizaciones para mantener tu sistema funcionando óptimamente.',
      image: '/images/services/support-process.jpg'
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
            className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-full blur-xl"
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
            className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-orange-400/10 to-amber-500/10 rounded-full blur-xl"
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
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                <Scale className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">
                OrangeLic
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-amber-600 bg-clip-text text-transparent">
                Gestión Legal Inteligente
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
              Optimiza tu bufete de abogados con nuestro sistema integral de gestión legal. 
              Simplifica la administración, mejora la atención a clientes y haz crecer tu 
              práctica con tecnología de vanguardia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg hover:shadow-2xl transition-all duration-300"
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
                className="border-2 border-orange-500/30 text-white font-bold py-4 px-8 rounded-full text-xl hover:bg-orange-500/10 transition-all duration-300"
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
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange-500/10 text-orange-400 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-400 text-lg mb-6">{feature.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="relative rounded-2xl overflow-hidden aspect-video bg-white/10 group">
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <Eye className="w-12 h-12 text-amber-400 mb-2" />
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
              Un enfoque estructurado para implementar OrangeLic en tu bufete
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
                <div className="relative rounded-2xl overflow-hidden aspect-video mb-6">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4 text-4xl font-bold text-orange-400">
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
      <section className="py-20 bg-gradient-to-br from-orange-900/50 to-amber-900/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              ¿Listo para Optimizar tu Bufete?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Agenda una consulta gratuita y descubre cómo OrangeLic puede ayudarte a 
              mejorar la eficiencia de tu bufete y la calidad de atención a tus clientes.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg hover:shadow-2xl transition-all duration-300"
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
    </div>
  );
};

export default OrangeLic; 