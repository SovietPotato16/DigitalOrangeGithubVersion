import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Zap, Database, Shield, BarChart, Settings, Server, Code, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import WhatsAppButton from '@/components/WhatsAppButton';

const EnterpriseSystems = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Automatización de Procesos',
      description: 'Automatizamos tus flujos de trabajo, integramos sistemas y optimizamos procesos operativos para aumentar la eficiencia y reducir errores.',
      image: '/images/services/automation.jpg',
      benefits: [
        'Automatización de tareas',
        'Integración de sistemas',
        'Optimización de procesos',
        'Reducción de errores'
      ]
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: 'Gestión de Datos',
      description: 'Sistemas seguros de almacenamiento, análisis de datos en tiempo real y herramientas de inteligencia empresarial para la toma de decisiones.',
      image: '/images/services/data-management.jpg',
      benefits: [
        'Almacenamiento seguro',
        'Análisis en tiempo real',
        'Business Intelligence',
        'Reportes personalizados'
      ]
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Seguridad Empresarial',
      description: 'Protección de datos sensibles, control de acceso granular, auditorías de seguridad y cumplimiento con regulaciones de la industria.',
      image: '/images/services/enterprise-security.jpg',
      benefits: [
        'Protección de datos',
        'Control de acceso',
        'Auditorías de seguridad',
        'Cumplimiento normativo'
      ]
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: 'Analíticas y Reportes',
      description: 'Dashboards personalizados, reportes automatizados, KPIs en tiempo real y herramientas de análisis predictivo para el crecimiento empresarial.',
      image: '/images/services/analytics.jpg',
      benefits: [
        'Dashboards personalizados',
        'Reportes automatizados',
        'KPIs en tiempo real',
        'Análisis predictivo'
      ]
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: 'Personalización',
      description: 'Sistemas adaptables a tus necesidades específicas, interfaces personalizables y configuración flexible de módulos y funcionalidades.',
      image: '/images/services/customization.jpg',
      benefits: [
        'Adaptación a necesidades',
        'Interfaces personalizables',
        'Módulos configurables',
        'Flexibilidad total'
      ]
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: 'Rendimiento y Escalabilidad',
      description: 'Arquitectura de alto rendimiento, escalabilidad horizontal y optimización de recursos para manejar el crecimiento de tu negocio.',
      image: '/images/services/performance.jpg',
      benefits: [
        'Alto rendimiento',
        'Escalabilidad horizontal',
        'Optimización de recursos',
        'Crecimiento sostenido'
      ]
    }
  ];

  const process = [
    {
      title: 'Descubrimiento',
      description: 'Analizamos tus procesos actuales, identificamos áreas de mejora y definimos objetivos claros para la implementación del sistema.',
      image: '/images/Sites/Discovery.svg'
    },
    {
      title: 'Diseño',
      description: 'Creamos una arquitectura personalizada que se adapta a tus necesidades específicas y procesos de negocio.',
      image: '/images/Sites/design.svg'
    },
    {
      title: 'Implementación',
      description: 'Desarrollamos e implementamos el sistema con integraciones, automatizaciones y funcionalidades personalizadas.',
      image: '/images/Sites/Implementacion.svg'
    },
    {
      title: 'Optimización',
      description: 'Realizamos pruebas exhaustivas, capacitación del equipo y ajustes finales para asegurar el éxito del sistema.',
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
            className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-full blur-xl"
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
            className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-indigo-500/10 rounded-full blur-xl"
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
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center">
                <Building2 className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">
                Sistemas Empresariales
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-indigo-600 bg-clip-text text-transparent">
                Optimización y Automatización
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
              Transforma tu empresa con soluciones tecnológicas integrales diseñadas para optimizar 
              y escalar tus operaciones. Automatizamos procesos, integramos sistemas y potenciamos 
              tu crecimiento empresarial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg hover:shadow-2xl transition-all duration-300"
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
                className="border-2 border-purple-500/30 text-white font-bold py-4 px-8 rounded-full text-xl hover:bg-purple-500/10 transition-all duration-300"
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
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-400 text-lg mb-6">{feature.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="relative rounded-2xl overflow-hidden aspect-video">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
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
              Un enfoque estructurado para implementar soluciones empresariales efectivas
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
                  <div className="absolute top-4 left-4 text-4xl font-bold text-purple-400">
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
      <section className="py-20 bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              ¿Listo para Transformar tu Empresa?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Agenda una consulta gratuita y descubre cómo podemos ayudarte a optimizar tus 
              procesos y hacer crecer tu negocio con soluciones tecnológicas avanzadas.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg hover:shadow-2xl transition-all duration-300"
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

export default EnterpriseSystems; 