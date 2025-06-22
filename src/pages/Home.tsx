import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Store, 
  Building2, 
  Stethoscope, 
  Scale,
  Zap, 
  Rocket, 
  ArrowRight, 
  Eye, 
  CheckCircle, 
  Star,
  Sparkles,
  Calendar
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ProjectWizard from '@/components/ProjectWizard';
import WhatsAppButton from '@/components/WhatsAppButton';

// Componente personalizado para el ícono dental usando emoji
const ToothIcon = ({ className }: { className?: string }) => (
  <span className={`text-2xl ${className}`}>🦷</span>
);

const Home = () => {
  const [isWizardOpen, setIsWizardOpen] = useState(false);

  const handleLaunchProject = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWizardOpen(true);
  };

  // Brands data array con logos reales desde public/images
  const brandsData = [
    { 
      name: 'Caninos Argentina', 
      logo: '/images/LOGO CANINOS.png',
      url: 'https://caninosargentina.com'
    },
    { 
      name: 'Google', 
      logo: '/images/google_logo.png',
      url: 'https://google.com'
    },
    { 
      name: 'Smart Clic', 
      logo: '',
      url: 'https://smartclic.mx',
      isText: true // Renderizar como texto ya que no existe el logo
    },
    { 
      name: 'Inncosys', 
      logo: '/images/inncosys_logo.jpg',
      url: 'https://inncosys.com'
    },
    { 
      name: 'Meta', 
      logo: '/images/meta_logo.png',
      url: 'https://meta.com'
    },
    { 
      name: 'OpenAI', 
      logo: '/images/OpenAi_Logo.png',
      url: 'https://openai.com'
     }
  ];

  const services = [
    {
      icon: Globe,
      title: 'Sitios Web',
      description: 'Sitios web modernos y responsivos que destacan tu marca en línea',
      color: 'from-blue-500 to-cyan-500',
      link: '/services/websites'
    },
    {
      icon: Store,
      title: 'E-commerce',
      description: 'Tiendas online completas con pagos, inventario y envíos automatizados',
      color: 'from-green-500 to-emerald-500',
      link: '/services/ecommerce'
    },
    {
      icon: Building2,
      title: 'Sistemas Empresariales',
      description: 'Software personalizado para optimizar tus procesos de negocio',
      color: 'from-purple-500 to-indigo-500',
      link: '/services/enterprise-systems'
    },
    {
      icon: Stethoscope,
      title: 'Consultorios Médicos',
      description: 'Sistemas de citas, expedientes y gestión para profesionales de la salud',
      color: 'from-red-500 to-pink-500',
      link: '/services/orange-dr'
    },
    {
      icon: Scale,
      title: 'Despachos Jurídicos',
      description: 'Plataformas para gestión de casos, clientes y documentos legales',
      color: 'from-amber-500 to-yellow-500',
      link: '/services/orange-lic'
    },
    {
      icon: ToothIcon,
      title: 'Consultorios Dentales',
      description: 'Sistemas especializados para clínicas dentales con gestión de citas y tratamientos',
      color: 'from-cyan-500 to-blue-500',
      link: '/services/orange-dr'
    }
  ];

  const features = [
    'Tecnología de vanguardia',
    'Diseño responsive y moderno',
    'Optimización SEO incluida',
    'Soporte técnico continuo'
  ];

  const testimonials = [
    {
      name: 'María González',
      role: 'Restaurante La Cocina',
      content: 'Increíble trabajo. Mi menú digital estuvo listo en menos de 2 días y mis clientes lo aman.',
      rating: 5
    },
    {
      name: 'Carlos Ruiz',
      role: 'Fotógrafo Freelance',
      content: 'Mi portafolio quedó espectacular. La calidad y velocidad de entrega superó mis expectativas.',
      rating: 5
    },
    {
      name: 'Ana Silva',
      role: 'Boutique Fashion',
      content: 'Nunca pensé que vender en línea sería tan lucrativo y facil antes de conocer a Digital Orange',
      rating: 5
    }
  ];

  return (
    <main className="relative w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center">
        {/* Background gradients */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-gradient-to-br from-orange-500/10 via-pink-500/5 to-purple-600/10 rounded-full blur-[100px]" />
          <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-40 left-1/3 w-[400px] h-[400px] bg-gradient-to-br from-green-500/5 via-cyan-500/5 to-blue-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 md:pt-32">
          {/* Badge */}
          <div className="inline-block transition-transform hover:scale-105 mb-8">
            <Badge className="bg-gradient-to-r from-orange-500/20 to-pink-500/20 text-orange-300 hover:from-orange-500/30 hover:to-pink-500/30 rounded-full px-6 py-3 text-lg border border-orange-500/30 backdrop-blur-sm">
              <Zap className="w-5 h-5 mr-2" />
              Entregas desde 48 hrs ⚡
            </Badge>
          </div>
          
          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
            <span className="block text-white">
              Sitios web que
            </span>
            <span className="block bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent text-7xl md:text-9xl transition-transform hover:scale-105">
              IMPULSAN
            </span>
            <span className="block text-white/90 text-5xl md:text-7xl">
              tu negocio
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Creamos experiencias digitales que <span className="text-orange-400 font-bold">hipnotizan</span> a tus clientes.
            <br />
            Desde portafolios hasta e-commerce, entregamos <span className="text-pink-400 font-bold">magia digital</span> en tiempo récord.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              className="bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2 hover:scale-105 group"
              onClick={handleLaunchProject}
            >
              <Rocket className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform" />
              Lanzar proyecto
              <ArrowRight className="w-6 h-6" />
            </button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full px-10 py-6 text-xl bg-white text-gray-900 hover:text-orange-500 hover:bg-white backdrop-blur-sm group border-0"
              asChild
            >
              <Link to="/portfolio">
                <Eye className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                Ver la magia
              </Link>
            </Button>
          </div>

          {/* Features list */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400 mb-20">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center transition-transform hover:scale-105 hover:text-orange-400"
              >
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* Testimonial cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto pb-16">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="flex flex-col h-full p-6 bg-black/40 backdrop-blur-xl border border-white/10 hover:border-orange-500/30 transition-all hover:-translate-y-2">
                {/* Header - Name and Role */}
                <div className="mb-6 text-left">
                  <p className="font-bold text-white text-left">{testimonial.name}</p>
                  <p className="text-orange-400 text-sm text-left">{testimonial.role}</p>
                </div>
                
                {/* Rating Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Testimonial Content */}
                <p className="text-gray-300 text-sm leading-relaxed flex-grow">"{testimonial.content}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Fondo con gradiente oscuro como otras secciones */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-gray-900/95"></div>
        
        {/* Blobs naranjas animados difuminados */}
        <div className="absolute inset-0">
          {/* Blob 1 - Grande, movimiento lento */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/30 to-pink-500/20 rounded-full blur-3xl animate-pulse opacity-70 transform translate-x-0 translate-y-0" 
               style={{
                 animation: 'float1 20s ease-in-out infinite'
               }}></div>
          
          {/* Blob 2 - Mediano, movimiento diagonal */}
          <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-br from-orange-400/25 to-red-500/15 rounded-full blur-2xl opacity-60 transform translate-x-0 translate-y-0"
               style={{
                 animation: 'float2 15s ease-in-out infinite 5s'
               }}></div>
          
          {/* Blob 3 - Pequeño, movimiento rápido */}
          <div className="absolute bottom-1/4 left-1/2 w-48 h-48 bg-gradient-to-br from-orange-600/35 to-yellow-500/20 rounded-full blur-xl opacity-50 transform translate-x-0 translate-y-0"
               style={{
                 animation: 'float3 12s ease-in-out infinite 2s'
               }}></div>
          
          {/* Blob 4 - Extra difuminado para atmósfera */}
          <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-br from-orange-300/20 to-orange-700/10 rounded-full blur-3xl opacity-40 transform translate-x-0 translate-y-0"
               style={{
                 animation: 'float4 18s ease-in-out infinite 8s'
               }}></div>
        </div>

        {/* CSS para las animaciones de los blobs */}
        <style>{`
          @keyframes float1 {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            25% { transform: translate(30px, -20px) scale(1.1); }
            50% { transform: translate(-20px, 30px) scale(0.9); }
            75% { transform: translate(20px, 20px) scale(1.05); }
          }
          
          @keyframes float2 {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(-40px, 25px) scale(1.15); }
            66% { transform: translate(35px, -30px) scale(0.85); }
          }
          
          @keyframes float3 {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            20% { transform: translate(25px, 15px) scale(1.2); }
            40% { transform: translate(-15px, -25px) scale(0.8); }
            60% { transform: translate(30px, 10px) scale(1.1); }
            80% { transform: translate(-20px, 20px) scale(0.9); }
          }
          
          @keyframes float4 {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            50% { transform: translate(-25px, -35px) scale(1.3); }
          }
        `}</style>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-white">Nuestros</span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">super poderes</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Especializados en crear soluciones digitales que transforman negocios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group relative flex flex-col h-full p-8 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '24px',
                  boxShadow: `
                    0 8px 32px rgba(0, 0, 0, 0.3),
                    0 0 0 1px rgba(255, 255, 255, 0.05),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                  `
                }}
                                 onMouseEnter={(e) => {
                   // Efecto de deformación de cristal en hover
                   e.currentTarget.style.backdropFilter = 'blur(25px) saturate(200%) contrast(120%) brightness(110%)';
                   (e.currentTarget.style as any).webkitBackdropFilter = 'blur(25px) saturate(200%) contrast(120%) brightness(110%)';
                   e.currentTarget.style.borderColor = 'rgba(249, 115, 22, 0.4)';
                   e.currentTarget.style.boxShadow = `
                     0 20px 40px rgba(249, 115, 22, 0.15),
                     0 0 0 1px rgba(249, 115, 22, 0.2),
                     inset 0 1px 0 rgba(255, 255, 255, 0.2),
                     inset 0 0 20px rgba(249, 115, 22, 0.05)
                   `;
                   e.currentTarget.style.transform = 'translateY(-8px) perspective(1000px) rotateX(2deg)';
                 }}
                 onMouseLeave={(e) => {
                   // Restaurar efecto original
                   e.currentTarget.style.backdropFilter = 'blur(20px) saturate(180%)';
                   (e.currentTarget.style as any).webkitBackdropFilter = 'blur(20px) saturate(180%)';
                   e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                   e.currentTarget.style.boxShadow = `
                     0 8px 32px rgba(0, 0, 0, 0.3),
                     0 0 0 1px rgba(255, 255, 255, 0.05),
                     inset 0 1px 0 rgba(255, 255, 255, 0.1)
                   `;
                   e.currentTarget.style.transform = 'translateY(0px) perspective(1000px) rotateX(0deg)';
                 }}
              >
                {/* Efecto de brillo en los bordes */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                     style={{
                       background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, transparent 50%, rgba(249, 115, 22, 0.1) 100%)',
                       filter: 'blur(2px)'
                     }}>
                </div>
                
                {/* Reflejos de cristal */}
                <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-1/3 right-1/3 h-px bg-gradient-to-r from-transparent via-orange-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-orange-500/20`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-orange-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6 flex-grow group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </p>
                  <Button 
                    variant="ghost" 
                    className="w-full mt-auto bg-white/5 hover:bg-white/10 text-white hover:text-white border border-white/10 hover:border-orange-500/30 rounded-xl group"
                    asChild
                  >
                    <Link to={service.link}>
                      <span>Más información</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Spacer entre superpoderes y brands */}
      <div className="py-8"></div>

      {/* Clients & Partners Carousel Section */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-purple-600">
              Nuestros Clientes y Socios
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Empresas y organizaciones que confían en nosotros para transformar su presencia digital
            </p>
            

          </div>
          
          {/* Brands Carousel Container */}
          <div className="relative overflow-hidden">
            {/* Gradients for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
            
            {/* Framer Motion Continuous Carousel */}
            <motion.div
              className="flex items-center gap-8"
              animate={{
                x: [0, -1200], // Ajustar según el ancho de elementos
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicar elementos para loop infinito suave */}
              {[...brandsData, ...brandsData, ...brandsData, ...brandsData].map((brand, index) => (
                <a
                  key={index}
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-purple-300 transition-all duration-500 hover:scale-110 hover:shadow-xl w-[200px] h-24 mx-4 flex-shrink-0"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '96px',
                    minWidth: '200px'
                  }}
                >
                  {/* Renderizar texto azul centrado para SmartClic o imagen para otros */}
                  {brand.isText ? (
                    <div className="text-blue-600 font-bold text-xl text-center transition-all duration-500 group-hover:text-blue-700 group-hover:scale-110">
                      SmartClic
                    </div>
                  ) : (
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-h-12 max-w-[160px] w-auto h-auto object-contain transition-all duration-500 group-hover:scale-110"
                      style={{
                        maxHeight: '48px',
                        maxWidth: '160px',
                        objectFit: 'contain',
                        objectPosition: 'center'
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://via.placeholder.com/160x48/CCCCCC/666666?text=${brand.name.replace(/\s+/g, '+')}`;
                      }}
                    />
                  )}
                  
                  {/* Brand Name for Better UX */}
                  <span className="absolute bottom-1 left-0 right-0 text-xs text-gray-500 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {brand.name}
                  </span>
                  
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8">
            ¿Listo para la<br />
            <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">Revolución Digital</span>?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Únete a cientos de empresarios que ya confiaron en nosotros para crear su presencia digital
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 rounded-full px-10 py-6 text-xl font-bold shadow-2xl hover:scale-105 transition-transform"
              onClick={handleLaunchProject}
            >
              <Sparkles className="mr-3 h-6 w-6" />
              Comenzar ahora
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 rounded-full px-10 py-6 text-xl backdrop-blur-sm hover:scale-105 transition-transform"
              onClick={handleLaunchProject}
            >
              <Calendar className="mr-3 h-6 w-6" />
              Agendar consulta gratuita
            </Button>
          </div>
        </div>
      </section>

      {/* Simple Project Wizard Modal */}
      <ProjectWizard 
        isOpen={isWizardOpen} 
        onClose={() => setIsWizardOpen(false)} 
      />
      
      {/* Botón flotante de WhatsApp */}
      <WhatsAppButton />
    </main>
  );
};

export default Home;