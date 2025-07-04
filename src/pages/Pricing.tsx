import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useState, useRef } from 'react';
import { Check, Star, Zap, Crown, Rocket, Sparkles, Store, Coffee, Calendar, BarChart, Sparkle, Stethoscope, Scale, Brain, Building2, Users, Briefcase, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ContactModal from '@/components/ContactModal';
import React from 'react';

// Interface para la información del plan
interface PlanInfo {
  planName: string;
  planCategory: string;
  planPrice: number;
  billingType: 'monthly' | 'annual';
  ctaText: string;
}

const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

const calculateAnnualPrice = (monthlyPrice: number): number => {
  // 20% discount for annual plans
  return Math.round(monthlyPrice * 0.8);
};

// Blob background component
function AnimatedBlobsBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [bounds, setBounds] = useState({ width: 1200, height: 800 });

  // Actualiza el tamaño del contenedor dinámicamente
  React.useEffect(() => {
    function updateBounds() {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setBounds({ width: rect.width, height: rect.height });
      }
    }
    updateBounds();
    window.addEventListener('resize', updateBounds);
    return () => window.removeEventListener('resize', updateBounds);
  }, []);

  // Suaviza el movimiento con useSpring
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  // Los blobs se mueven en función de la posición del mouse y el tamaño real del contenedor
  const blob1X = useTransform(springX, [0, bounds.width], [-120, 120]);
  const blob1Y = useTransform(springY, [0, bounds.height], [-90, 90]);
  const blob2X = useTransform(springX, [0, bounds.width], [120, -120]);
  const blob2Y = useTransform(springY, [0, bounds.height], [90, -90]);
  const blob3X = useTransform(springX, [0, bounds.width], [-80, 80]);
  const blob3Y = useTransform(springY, [0, bounds.height], [100, -100]);
  const blob4X = useTransform(springX, [0, bounds.width], [80, -80]);
  const blob4Y = useTransform(springY, [0, bounds.height], [-100, 100]);

  return (
    <div
      ref={ref}
      className="pointer-events-auto absolute inset-0 w-full h-full overflow-hidden z-0"
      onMouseMove={handleMouseMove}
      aria-hidden
    >
      <motion.div style={{ x: blob1X, y: blob1Y }} className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-orange-500/40 rounded-full blur-xl opacity-80" />
      <motion.div style={{ x: blob2X, y: blob2Y }} className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-orange-400/30 rounded-full blur-lg opacity-70" />
      <motion.div style={{ x: blob3X, y: blob3Y }} className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-orange-300/30 rounded-full blur-lg opacity-60" />
      <motion.div style={{ x: blob4X, y: blob4Y }} className="absolute bottom-1/3 left-1/3 w-[250px] h-[250px] bg-orange-600/20 rounded-full blur-md opacity-60" />
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#181c23] via-[#181c23]/80 to-orange-500/5" />
    </div>
  );
}

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PlanInfo | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Función para abrir el modal con información del plan
  const handlePlanSelection = (plan: any, category: string) => {
    const planInfo: PlanInfo = {
      planName: plan.name,
      planCategory: category,
      planPrice: isAnnual ? calculateAnnualPrice(plan.price) : plan.price,
      billingType: isAnnual ? 'annual' : 'monthly',
      ctaText: plan.cta
    };
    setSelectedPlan(planInfo);
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
  };

  const getDiscountedPrice = (price: number) => {
    // Calculamos el precio con 50% de descuento
    const discountedPrice = Math.floor(price * 0.5);
    
    if (isAnnual) {
      // Para plan anual: 50% de descuento base + 20% adicional
      const annualDiscountedPrice = Math.floor(discountedPrice * 0.8);
      return {
        original: price,
        discounted: annualDiscountedPrice,
        period: '/mes',
        savings: 'Un mes gratis + 70% desc.'
      };
    } else {
      return {
        original: price,
        discounted: discountedPrice,
        period: '/mes',
        savings: '50% primer mes'
      };
    }
  };

  const websitePlans = [
    {
      name: 'Básico',
      icon: Zap,
      price: 999,
      description: 'Perfecto para pequeños negocios que están comenzando',
      features: [
        'Diseño web responsive',
        'Hasta 5 páginas',
        'Formulario de contacto',
        'Optimización SEO básica',
        'Hosting por 1 año',
        'Soporte por email'
      ],
      cta: 'Comenzar ahora',
      popular: false,
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Profesional',
      icon: Star,
      price: 1999,
      description: 'Ideal para negocios en crecimiento que necesitan más funcionalidades',
      features: [
        'Todo lo del plan Básico',
        'Hasta 10 páginas',
        'Blog integrado',
        'Panel de administración',
        'Optimización SEO avanzada',
        'Soporte prioritario',
        'Google Analytics',
        'Certificado SSL'
      ],
      cta: 'Elegir Profesional',
      popular: true,
      color: 'from-orange-500 to-orange-600'
    },
    {
      name: 'Empresarial',
      icon: Crown,
      price: 3999,
      description: 'Para empresas que necesitan soluciones personalizadas y escalables',
      features: [
        'Todo lo del plan Profesional',
        'Páginas ilimitadas',
        'API personalizada',
        'Migración de datos',
        'Soporte 24/7',
        'Servidor dedicado',
        'Backup diario'
      ],
      cta: 'Contactar ventas',
      popular: false,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const ecommercePlans = [
    {
      name: 'Tienda Básica',
      icon: Store,
      price: 1999,
      description: 'Ideal para emprendedores que inician su tienda online',
      features: [
        'Hasta 100 productos',
        'Carrito de compras',
        'Pagos con tarjeta',
        'Gestión de inventario básica',
        'Hosting por 1 año',
        'Soporte por email',
        'SSL incluido'
      ],
      cta: 'Crear tienda',
      popular: false,
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Tienda Pro',
      icon: Rocket,
      price: 2999,
      description: 'Para tiendas en crecimiento con necesidades avanzadas',
      features: [
        'Todo lo de Tienda Básica',
        'Hasta 1000 productos',
        'Multi-método de pago',
        'Gestión de inventario avanzada',
        'Sistema de cupones',
        'Integración con marketplaces',
        'Reportes avanzados',
        'Soporte prioritario'
      ],
      cta: 'Comenzar ahora',
      popular: true,
      color: 'from-orange-500 to-orange-600'
    },
    {
      name: 'Tienda Enterprise',
      icon: Crown,
      price: 4999,
      description: 'Solución completa para grandes tiendas online',
      features: [
        'Todo lo de Tienda Pro',
        'Productos ilimitados',
        'API personalizada',
        'Integración ERP',
        'Multi-moneda',
        'Multi-idioma',
        'Soporte 24/7',
        'Servidor dedicado'
      ],
      cta: 'Contactar ventas',
      popular: false,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const smallBusinessPlans = [
    {
      name: 'ERP Básico',
      icon: Building2,
      price: 1499,
      description: 'Gestión básica para pequeños negocios',
      features: [
        'Gestión de inventario',
        'Facturación electrónica',
        'Control de ventas',
        'Reportes básicos',
        'Hasta 3 usuarios',
        'Soporte por email'
      ],
      cta: 'Comenzar ahora',
      popular: false,
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'ERP + CRM',
      icon: Users,
      price: 2499,
      description: 'Solución completa para gestión y clientes',
      features: [
        'Todo lo de ERP Básico',
        'Gestión de clientes',
        'Pipeline de ventas',
        'Automatización básica',
        'Hasta 5 usuarios',
        'Soporte prioritario',
        'Capacitación incluida'
      ],
      cta: 'Elegir plan',
      popular: true,
      color: 'from-orange-500 to-orange-600'
    },
    {
      name: 'Suite Completa',
      icon: Sparkle,
      price: 3499,
      description: 'ERP + CRM + Marketing para crecimiento',
      features: [
        'Todo lo de ERP + CRM',
        'Automatización de marketing',
        'Email marketing',
        'Análisis avanzado',
        'Hasta 10 usuarios',
        'Soporte 24/7',
        'Consultoría mensual'
      ],
      cta: 'Contactar ventas',
      popular: false,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const enterpriseSystems = [
    {
      name: 'Enterprise ERP',
      icon: Building2,
      price: 7999,
      description: 'Sistema ERP robusto para grandes empresas',
      features: [
        'Gestión financiera avanzada',
        'Multi-sucursal',
        'Hasta 50 usuarios',
        'Reportes personalizados',
        'API completa',
        'Soporte dedicado 24/7',
        'Implementación guiada'
      ],
      cta: 'Solicitar demo',
      popular: false,
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      name: 'Enterprise Suite',
      icon: Crown,
      price: 12999,
      description: 'Solución empresarial todo en uno',
      features: [
        'ERP + CRM Enterprise',
        'Marketing automation',
        'Business Intelligence',
        'Usuarios ilimitados',
        'API personalizada',
        'Consultor dedicado',
        'SLA garantizado'
      ],
      cta: 'Contactar ventas',
      popular: true,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const professionalServices = [
    {
      name: 'Clínica Médica/Dental',
      icon: Stethoscope,
      price: 2499,
      description: 'Sistema completo para gestión clínica',
      features: [
        'Expedientes digitales',
        'Agenda de citas',
        'Recordatorios automáticos',
        'Historial médico',
        'Facturación integrada',
        'App para pacientes',
        'Recetas digitales'
      ],
      cta: 'Ver demo',
      popular: false,
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      name: 'Despacho Legal',
      icon: Scale,
      price: 2999,
      description: 'Asistente virtual legal inteligente',
      features: [
        'Gestión de casos',
        'Análisis de documentos con IA',
        'Agenda inteligente',
        'Plantillas legales',
        'Portal de clientes',
        'Facturación por hora',
        'Biblioteca legal digital'
      ],
      cta: 'Comenzar ahora',
      popular: true,
      color: 'from-orange-500 to-orange-600'
    },
    {
      name: 'Consulta Psicológica',
      icon: Brain,
      price: 1999,
      description: 'Plataforma para terapeutas y psicólogos',
      features: [
        'Videoconferencias HD',
        'Expedientes seguros',
        'Notas de sesión',
        'Agenda online',
        'Portal para pacientes',
        'Pagos integrados',
        'Evaluaciones digitales'
      ],
      cta: 'Explorar plan',
      popular: false,
      color: 'from-green-500 to-green-600'
    }
  ];

  const specializedServices = [
    {
      name: 'Menú Digital',
      icon: Coffee,
      price: 799,
      description: 'Menú digital interactivo para restaurantes',
      features: [
        'QR personalizado',
        'Categorías ilimitadas',
        'Fotos de platillos',
        'Actualización en tiempo real',
        'Panel de administración',
        'Soporte técnico'
      ],
      cta: 'Crear menú',
      popular: false,
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Sistema de Citas',
      icon: Calendar,
      price: 999,
      description: 'Gestión de citas y reservaciones online',
      features: [
        'Calendario interactivo',
        'Notificaciones SMS/Email',
        'Panel de administración',
        'Recordatorios automáticos',
        'Pagos en línea',
        'Reportes y estadísticas'
      ],
      cta: 'Comenzar ahora',
      popular: true,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const renderPricingCards = (plans: any[], category: string) => (
    <div className={`grid grid-cols-1 md:grid-cols-${plans.length === 2 ? '2' : '3'} gap-8 mx-auto ${
      plans.length === 2 ? 'max-w-[800px]' : 'max-w-[1200px]'
    } px-4 sm:px-6 lg:px-8`}>
            {plans.map((plan, index) => (
              <motion.div
          key={plan.name}
                initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`relative flex flex-col h-full p-8 rounded-2xl border backdrop-blur-sm ${
            plan.popular
              ? 'bg-orange-500/10 border-orange-500/50 shadow-lg shadow-orange-500/10'
              : 'bg-white/5 border-white/10 hover:border-orange-500/30'
          } transition-all group`}
              >
                {plan.popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-orange-500 text-white text-sm font-medium rounded-full">
              Más Popular
                  </div>
                )}
                
          <div className="flex items-center justify-center mb-6">
            <plan.icon className={`w-12 h-12 ${plan.popular ? 'text-orange-400' : 'text-gray-400'} group-hover:text-orange-400 transition-colors`} />
          </div>

          <h3 className="text-2xl font-bold text-white text-center mb-2">{plan.name}</h3>
          <p className="text-gray-400 text-center mb-6">{plan.description}</p>

          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2">
              {isAnnual && (
                <span className="text-lg text-gray-400 line-through">
                  {formatPrice(plan.price)}
                </span>
              )}
              <span className="text-4xl font-bold text-white">
                {formatPrice(isAnnual ? calculateAnnualPrice(plan.price) : plan.price)}
              </span>
              <span className="text-gray-400">/mes</span>
                    </div>
            {!isAnnual && (
              <div className="mt-2">
                <span className="inline-block px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full">
                  Primer mes 50% off
                </span>
                    </div>
            )}
                  </div>

                  <ul className="space-y-4 mb-8">
            {plan.features.map((feature: string) => (
              <li key={feature} className="flex items-start gap-3 text-gray-300">
                <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

          <button
            onClick={() => handlePlanSelection(plan, category)}
            className={`w-full py-3 px-6 rounded-xl font-medium transition-all mt-auto ${
                      plan.popular
                ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-lg hover:shadow-orange-500/25'
                : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
            {plan.cta}
          </button>
              </motion.div>
            ))}
          </div>
  );

  return (
    <div className="pt-24 pb-16 relative overflow-hidden">
      <AnimatedBlobsBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Planes y Precios
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Elige el plan perfecto para tu negocio
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center mt-8 mb-4">
          <span className="text-gray-400 mr-3">Mensual</span>
          <Switch
            checked={isAnnual}
            onCheckedChange={setIsAnnual}
            className={`${isAnnual ? 'bg-green-600' : 'bg-gray-600'}`}
          />
          <span className="text-gray-400 ml-3">
            Anual <span className="text-green-500">(20% descuento)</span>
          </span>
        </div>

        {/* Pricing Tabs */}
        <Tabs defaultValue="websites" className="w-full">
          <TabsList className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 bg-transparent mb-12 sm:mb-16">
            <TabsTrigger 
              value="websites"
              className="bg-white/5 hover:bg-white/10 text-white data-[state=active]:bg-orange-500 rounded-full px-4 py-2.5"
            >
              Sitios Web
            </TabsTrigger>
            <TabsTrigger 
              value="ecommerce"
              className="bg-white/5 hover:bg-white/10 text-white data-[state=active]:bg-orange-500 rounded-full px-4 py-2.5"
            >
              E-commerce
            </TabsTrigger>
            <TabsTrigger 
              value="smallbusiness"
              className="bg-white/5 hover:bg-white/10 text-white data-[state=active]:bg-orange-500 rounded-full px-4 py-2.5"
            >
              Pequeños Negocios
            </TabsTrigger>
            <TabsTrigger 
              value="enterprise"
              className="bg-white/5 hover:bg-white/10 text-white data-[state=active]:bg-orange-500 rounded-full px-4 py-2.5"
            >
              Empresarial
            </TabsTrigger>
            <TabsTrigger 
              value="professional"
              className="bg-white/5 hover:bg-white/10 text-white data-[state=active]:bg-orange-500 rounded-full px-4 py-2.5"
            >
              Profesionistas
            </TabsTrigger>
            <TabsTrigger 
              value="specialized"
              className="bg-white/5 hover:bg-white/10 text-white data-[state=active]:bg-orange-500 rounded-full px-4 py-2.5"
            >
              Servicios Especiales
            </TabsTrigger>
          </TabsList>

          <div className="mt-16">
            <TabsContent value="websites" className="mt-0">
              {renderPricingCards(websitePlans, 'Sitios Web')}
            </TabsContent>
            <TabsContent value="ecommerce" className="mt-0">
              {renderPricingCards(ecommercePlans, 'E-commerce')}
            </TabsContent>
            <TabsContent value="smallbusiness" className="mt-0">
              {renderPricingCards(smallBusinessPlans, 'Pequeños Negocios')}
            </TabsContent>
            <TabsContent value="enterprise" className="mt-0">
              {renderPricingCards(enterpriseSystems, 'Empresarial')}
            </TabsContent>
            <TabsContent value="professional" className="mt-0">
              {renderPricingCards(professionalServices, 'Profesionistas')}
            </TabsContent>
            <TabsContent value="specialized" className="mt-0">
              {renderPricingCards(specializedServices, 'Servicios Especiales')}
              <div className="text-center max-w-3xl mx-auto mt-16 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/30 transition-all hover:shadow-[0_8px_30px_rgb(255,107,53,0.1)]">
                <h3 className="text-2xl font-bold text-white mb-4">¿Necesitas algo diferente?</h3>
                <p className="text-gray-400 mb-8">
                  ¿No encuentras el producto que necesitas? Nuestro equipo de expertos puede crear una solución personalizada para tu negocio.
                </p>
                <button
                  onClick={() => handlePlanSelection({ name: 'Solución Personalizada', cta: 'Contactar expertos', price: 0 }, 'Servicios Personalizados')}
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-lg hover:shadow-orange-500/25 transition-all"
                >
                  Contacta a nuestros expertos
                </button>
            </div>
            </TabsContent>
          </div>
        </Tabs>

        {/* Guide Button */}
        <div className="flex justify-center mt-8 mb-12">
          <button
            onClick={() => handlePlanSelection({ name: 'Asesoría Personalizada', cta: 'Solicitar guía', price: 0 }, 'Consultoría')}
            className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-white transition-all hover:shadow-[0_0_20px_rgba(255,107,53,0.3)] hover:-translate-y-0.5"
          >
            <HelpCircle className="w-6 h-6" />
            <span className="text-lg font-medium">¿No sabes cuál elegir?</span>
            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 transform rounded-md bg-black px-3 py-1 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
              Solicitar asesoría
              </span>
          </button>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">¿Tienes preguntas?</h2>
          <p className="text-gray-400 mb-4">
            Nuestro equipo está aquí para ayudarte a elegir el plan perfecto para tu negocio.
            </p>
          <button
            onClick={() => handlePlanSelection({ name: 'Consulta General', cta: 'Contactar', price: 0 }, 'Consulta')}
            className="inline-flex items-center text-orange-500 hover:text-orange-400 transition-colors"
              >
            Contáctanos
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>

        {/* Pricing Note - Full Width */}
        <div className="mt-16 mb-16">
          <div className="w-full p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <p className="text-gray-400 text-center text-sm leading-relaxed">
              <span className="text-orange-400 font-medium">Información importante:</span> Los precios mostrados son aproximados y no incluyen costos de configuración inicial. El precio final puede variar según los requisitos específicos y necesidades particulares de cada cliente.
            </p>
          </div>
        </div>
      </div>

      {/* Modal de contacto */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        planInfo={selectedPlan}
      />
    </div>
  );
};

export default Pricing;