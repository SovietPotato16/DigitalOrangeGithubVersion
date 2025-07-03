import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Code, Smartphone, Shield, Search, BarChart, Zap, Palette, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import WhatsAppButton from '@/components/WhatsAppButton';

const WebSites = () => {
  const features = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Desarrollo Moderno',
      description: 'Creamos sitios web utilizando las últimas tecnologías y frameworks para garantizar un rendimiento óptimo y una experiencia de usuario excepcional.',
      image: '/images/Sites/website/DesarolloModerno.png',
      benefits: [
        'Tecnologías de vanguardia',
        'Código limpio y mantenible',
        'Arquitectura escalable',
        'Optimización de rendimiento'
      ]
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: 'Diseño Responsivo',
      description: 'Diseños que se adaptan perfectamente a cualquier dispositivo, desde smartphones hasta pantallas de escritorio, asegurando una experiencia consistente.',
      image: '/images/Sites/website/DisenioResponsivo.jpg',
      benefits: [
        'Adaptable a todos los dispositivos',
        'Experiencia móvil optimizada',
        'Diseño fluido y flexible',
        'Navegación intuitiva'
      ]
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Rendimiento Optimizado',
      description: 'Optimizamos cada aspecto de tu sitio web para garantizar tiempos de carga ultrarrápidos y una experiencia fluida para tus usuarios.',
      image: '/images/Sites/website/Rendimiento.jpg',
      benefits: [
        'Carga ultrarrápida',
        'Optimización de recursos',
        'Caching inteligente',
        'CDN global'
      ]
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Seguridad Avanzada',
      description: 'Implementamos las mejores prácticas de seguridad para proteger tu sitio web y los datos de tus usuarios contra amenazas cibernéticas.',
      image: '/images/Sites/website/SeguridadAvanzada.png',
      benefits: [
        'SSL/TLS',
        'Protección contra ataques',
        'Backups automáticos',
        'Monitoreo 24/7'
      ]
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: 'SEO Integrado',
      description: 'Optimizamos tu sitio web para los motores de búsqueda, aumentando tu visibilidad y atrayendo más tráfico orgánico.',
      image: '/images/Sites/website/SEO.png',
      benefits: [
        'Optimización on-page',
        'Estructura SEO-friendly',
        'Meta tags optimizados',
        'Sitemap XML'
      ]
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: 'Analíticas Web',
      description: 'Integramos herramientas de análisis para que puedas entender el comportamiento de tus usuarios y tomar decisiones basadas en datos.',
      image: '/images/Sites/website/EstadisticasYReportes.png',
      benefits: [
        'Google Analytics',
        'Reportes personalizados',
        'Seguimiento de conversiones',
        'Análisis de comportamiento'
      ]
    }
  ];

  const process = [
    {
      title: 'Descubrimiento',
      description: 'Nos reunimos contigo para entender tu negocio, objetivos y visión. Analizamos tu mercado, competencia y necesidades específicas para crear una estrategia digital personalizada.',
      image: '/images/Sites/Discovery.svg'
    },
    {
      title: 'Diseño',
      description: 'Creamos un diseño único y atractivo que refleja la identidad de tu marca y conecta con tu audiencia objetivo.',
      image: '/images/Sites/design.svg'
    },
    {
      title: 'Desarrollo',
      description: 'Implementamos el diseño con código limpio y optimizado, asegurando un rendimiento excepcional y una experiencia de usuario fluida.',
      image: '/images/Sites/Implementacion.svg'
    },
    {
      title: 'Entrega',
      description: 'Realizamos pruebas exhaustivas y optimizaciones finales antes de lanzar tu sitio web al mundo.',
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
            className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-xl"
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
            className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-cyan-500/10 rounded-full blur-xl"
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
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Globe className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">
                Sitios Web
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent">
                Diseño y Desarrollo Web
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
              Creamos sitios web modernos y responsivos que destacan tu marca en línea. 
              Nuestras soluciones web están diseñadas para conectar efectivamente con tu audiencia 
              y lograr tus objetivos de negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg hover:shadow-2xl transition-all duration-300"
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
                className="border-2 border-blue-500/30 text-white font-bold py-4 px-8 rounded-full text-xl hover:bg-blue-500/10 transition-all duration-300"
                asChild
              >
                <Link to="/portfolio">
                  <span>Ver Portafolio</span>
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
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-400 text-lg mb-6">{feature.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="relative rounded-2xl overflow-hidden aspect-video bg-white p-4">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-contain"
                    />
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
              Un enfoque estructurado para crear tu sitio web perfecto
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
                  <div className="absolute top-4 left-4 text-3xl font-bold text-blue-400 bg-white/90 rounded-lg px-2 py-1">
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
      <section className="py-20 bg-gradient-to-br from-blue-900/50 to-cyan-900/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              ¿Listo para Transformar tu Presencia Digital?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Agenda una consulta gratuita y descubre cómo podemos ayudarte a crear un sitio web 
              que impulse tu negocio al siguiente nivel.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg hover:shadow-2xl transition-all duration-300"
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

export default WebSites; 