import React from 'react';
import { motion } from 'framer-motion';
import { Store, CreditCard, Package, Truck, BarChart, Users, Shield, Zap, Search, Settings, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import WhatsAppButton from '@/components/WhatsAppButton';

const Ecommerce = () => {
  const features = [
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: 'Sistema de Pagos',
      description: 'Integración con múltiples pasarelas de pago, procesamiento seguro de transacciones, y soporte para diversos métodos de pago incluyendo tarjetas, transferencias y pagos móviles.',
      image: '/images/services/payment-system.jpg',
      benefits: [
        'Múltiples pasarelas de pago',
        'Procesamiento seguro',
        'Soporte para criptomonedas',
        'Facturación automática'
      ]
    },
    {
      icon: <Package className="h-6 w-6" />,
      title: 'Gestión de Inventario',
      description: 'Control automático de stock, alertas de inventario bajo, gestión de variantes, y sincronización en tiempo real con múltiples ubicaciones y proveedores.',
      image: '/images/services/inventory-management.jpg',
      benefits: [
        'Control de stock en tiempo real',
        'Alertas automáticas',
        'Gestión de variantes',
        'Sincronización multi-ubicación'
      ]
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: 'Envíos Automatizados',
      description: 'Integración con transportistas líderes, cálculo automático de costos de envío, seguimiento de paquetes en tiempo real, y gestión de devoluciones simplificada.',
      image: '/images/services/shipping.jpg',
      benefits: [
        'Integración con transportistas',
        'Cálculo automático de costos',
        'Seguimiento en tiempo real',
        'Gestión de devoluciones'
      ]
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: 'Analíticas Avanzadas',
      description: 'Dashboard con métricas clave, reportes detallados de ventas, análisis de comportamiento del cliente, y herramientas de predicción de demanda.',
      image: '/images/services/analytics.jpg',
      benefits: [
        'Dashboard personalizado',
        'Reportes detallados',
        'Análisis de comportamiento',
        'Predicción de demanda'
      ]
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Gestión de Clientes',
      description: 'Sistema de fidelización, historial de compras, segmentación de clientes, y herramientas de marketing personalizado para aumentar las ventas.',
      image: '/images/services/customer-management.jpg',
      benefits: [
        'Programa de fidelización',
        'Historial de compras',
        'Segmentación avanzada',
        'Marketing personalizado'
      ]
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Seguridad y Cumplimiento',
      description: 'Protección de datos, cumplimiento PCI DSS, autenticación de dos factores, y monitoreo de seguridad en tiempo real.',
      image: '/images/services/security.jpg',
      benefits: [
        'Cumplimiento PCI DSS',
        'Autenticación 2FA',
        'Encriptación de datos',
        'Monitoreo 24/7'
      ]
    }
  ];

  const process = [
    {
      title: 'Descubrimiento',
      description: 'Analizamos tu modelo de negocio, productos y objetivos. Entendemos tus necesidades específicas para crear una estrategia de e-commerce personalizada.',
      image: '/images/services/discovery-process.jpg'
    },
    {
      title: 'Configuración',
      description: 'Implementamos la plataforma con tus productos, categorías y configuraciones específicas, asegurando una experiencia de compra óptima.',
      image: '/images/services/setup-process.jpg'
    },
    {
      title: 'Integración',
      description: 'Conectamos todos los sistemas necesarios: pagos, envíos, inventario y marketing para una operación fluida.',
      image: '/images/services/integration-process.jpg'
    },
    {
      title: 'Lanzamiento',
      description: 'Realizamos pruebas exhaustivas y capacitación antes de lanzar tu tienda online al mercado.',
      image: '/images/services/launch-process.jpg'
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
            className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-xl"
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
            className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-green-400/10 to-emerald-500/10 rounded-full blur-xl"
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
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <Store className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">
                E-commerce
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                Tu Tienda Online Completa
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
              Transforma tu negocio con una tienda online completa. Desde pagos y envíos hasta 
              gestión de inventario y marketing, te proporcionamos todo lo necesario para vender 
              en línea de manera efectiva.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg hover:shadow-2xl transition-all duration-300"
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
                className="border-2 border-green-500/30 text-white font-bold py-4 px-8 rounded-full text-xl hover:bg-green-500/10 transition-all duration-300"
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
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-green-500/10 text-green-400 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-400 text-lg mb-6">{feature.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
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
              Un enfoque estructurado para lanzar tu tienda online
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
                  <div className="absolute top-4 left-4 text-4xl font-bold text-green-400">
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
      <section className="py-20 bg-gradient-to-br from-green-900/50 to-emerald-900/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              ¿Listo para Vender en Línea?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Agenda una consulta gratuita y descubre cómo podemos ayudarte a crear una tienda online 
              que impulse tus ventas y haga crecer tu negocio.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg hover:shadow-2xl transition-all duration-300"
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

export default Ecommerce; 