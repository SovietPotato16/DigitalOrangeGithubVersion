import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Palette, Smartphone, ShoppingCart, Calendar, Megaphone, CheckCircle, Star, Sparkles, Code, Rocket, Eye, Heart, Stethoscope, Scale, HeartPulse, Building2, Globe, Store } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { useState, lazy, Suspense } from 'react';

const ProjectWizard = lazy(() => import('@/components/ProjectWizard'));

const scrollX = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

const LogoTrack = styled.div`
  display: flex;
  gap: 3rem;
  animation: ${scrollX} 30s linear infinite;
  &:hover {
    animation-play-state: paused;
  }
`;

const Home = () => {
  const [isWizardOpen, setIsWizardOpen] = useState(false);

  const handleLaunchProject = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWizardOpen(true);
  };

  const services = [
    {
      icon: (props: React.SVGProps<SVGSVGElement>) => <Globe {...props} />,
      title: 'Sitios Web',
      description: 'Sitios web modernos y responsivos que destacan tu marca en línea',
      color: 'from-blue-500 to-cyan-500',
      link: '/services/websites'
    },
    {
      icon: (props: React.SVGProps<SVGSVGElement>) => <Store {...props} />,
      title: 'E-commerce',
      description: 'Tiendas online completas con pagos, inventario y envíos automatizados',
      color: 'from-green-500 to-emerald-500',
      link: '/services/ecommerce'
    },
    {
      icon: (props: React.SVGProps<SVGSVGElement>) => <Building2 {...props} />,
      title: 'Sistemas Empresariales',
      description: 'Software personalizado para optimizar tus procesos de negocio',
      color: 'from-purple-500 to-indigo-500',
      link: '/services/enterprise-systems'
    },
    {
      icon: (props: React.SVGProps<SVGSVGElement>) => <Stethoscope {...props} />,
      title: 'Consultorios Médicos',
      description: 'Sistemas de citas, expedientes y gestión para profesionales de la salud',
      color: 'from-red-500 to-pink-500',
      link: '/services/orange-dr'
    },
    {
      icon: (props: React.SVGProps<SVGSVGElement>) => <Scale {...props} />,
      title: 'Despachos Jurídicos',
      description: 'Plataformas para gestión de casos, clientes y documentos legales',
      color: 'from-amber-500 to-yellow-500',
      link: '/services/orange-lic'
    },
    {
      icon: (props: React.ImgHTMLAttributes<HTMLImageElement>) => <img src="/images/tooth.svg" alt="Clínica Dental" className="w-8 h-8" {...props} />,
      title: 'Clínicas Dentales',
      description: 'Software especializado para odontólogos y gestión de pacientes',
      color: 'from-orange-500 to-red-500',
      link: '/services/orange-dr'
    }
  ];

  const companyLogos = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Meta-Logo.png/2560px-Meta-Logo.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png'
  ];

  // Duplicate logos for seamless scrolling
  const duplicatedLogos = [...companyLogos, ...companyLogos];

  const features = [
    'Entrega garantizada en 48 horas',
    'Diseño responsive y moderno',
    'Optimización SEO incluida',
    'Soporte técnico continuo'
  ];

  const testimonials = [
    {
      name: 'María González',
      role: 'Restaurante La Cocina',
      content: 'Increíble trabajo. Mi menú digital estuvo listo en menos de 2 días y mis clientes lo aman.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
    },
    {
      name: 'Carlos Ruiz',
      role: 'Fotógrafo Freelance',
      content: 'Mi portafolio quedó espectacular. La calidad y velocidad de entrega superó mis expectativas.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
    },
    {
      name: 'Ana Silva',
      role: 'Boutique Fashion',
      content: 'La tienda online aumentó mis ventas un 300%. Excelente inversión.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
    }
  ];

  const FloatingElement = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 1.2, 
        delay,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      className={className}
    >
      {children}
    </motion.div>
  );

  const logoAnimation = keyframes`
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  `;

  const LogosSlide = styled.div`
    animation: ${logoAnimation} 30s linear infinite;
    &:hover {
      animation-play-state: paused;
    }
  `;

  return (
    <main className="relative w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center">
        {/* Background gradients */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Larger, softer gradient orbs */}
          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, -25, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-10 w-[600px] h-[600px] bg-gradient-to-br from-orange-500/10 via-pink-500/5 to-purple-600/10 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{
              x: [0, -40, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-40 right-20 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{
              x: [0, 25, 0],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-40 left-1/3 w-[400px] h-[400px] bg-gradient-to-br from-green-500/5 via-cyan-500/5 to-blue-500/5 rounded-full blur-[100px]"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 md:pt-32">
          {/* Badge */}
          <FloatingElement delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <Badge className="mb-8 bg-gradient-to-r from-orange-500/20 to-pink-500/20 text-orange-300 hover:from-orange-500/30 hover:to-pink-500/30 rounded-full px-6 py-3 text-lg border border-orange-500/30 backdrop-blur-sm">
                <Zap className="w-5 h-5 mr-2" />
                Entrega en 48 horas ⚡
              </Badge>
            </motion.div>
          </FloatingElement>
          
          {/* Main heading with fixed hover animation */}
          <FloatingElement delay={0.4}>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
              <span className="block text-white">
                Sitios web que
              </span>
              <motion.span 
                className="block text-gradient-rainbow text-7xl md:text-9xl"
                whileHover={{ 
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95
                }}
              >
                IMPULSAN
              </motion.span>
              <span className="block text-white/90 text-5xl md:text-7xl">
                tu negocio
              </span>
            </h1>
          </FloatingElement>
          
          {/* Subtitle with typing effect */}
          <FloatingElement delay={0.6}>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Creamos experiencias digitales que <span className="text-orange-400 font-bold">hipnotizan</span> a tus clientes.
              <br />
              Desde portafolios hasta e-commerce, entregamos <span className="text-pink-400 font-bold">magia digital</span> en tiempo récord.
            </p>
          </FloatingElement>
          
          {/* CTA Buttons */}
          <FloatingElement delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <div className="flex flex-col items-center justify-center gap-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
                  onClick={handleLaunchProject}
                >
                  <Rocket className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform" />
                  Lanzar proyecto
                  <ArrowRight className="w-6 h-6" />
                </motion.button>
              </div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
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
              </motion.div>
            </div>
          </FloatingElement>

          {/* Features list */}
          <FloatingElement delay={1.0}>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center stagger-item"
                  whileHover={{ scale: 1.05, color: "#ff6b35" }}
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </FloatingElement>

          {/* Floating testimonial cards */}
          <FloatingElement delay={1.2}>
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.2 }}
                  style={{ position: 'relative' }}
                >
                  <motion.div
                    whileHover={{ y: -10 }}
                    style={{ position: 'relative' }}
                    className="h-full"
                  >
                    <Card className="flex flex-col h-full p-6 bg-black/40 backdrop-blur-xl border border-white/10 hover:border-orange-500/30">
                      {/* Header - Avatar and Name */}
                      <div className="flex items-center mb-6">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-orange-500/30"
                        />
                        <div>
                          <p className="font-bold text-white">{testimonial.name}</p>
                          <p className="text-orange-400 text-sm">{testimonial.role}</p>
                        </div>
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
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </FloatingElement>
        </div>
      </section>

      {/* Content Sections */}
      <div className="relative">
        {/* Services Section */}
        <section className="relative py-32 mt-32">
          {/* Background Pattern */}
          <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
            <motion.div 
              animate={{
                x: [0, 50, 0],
                y: [0, -25, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-orange-500/40 rounded-full blur-xl opacity-80"
            />
            <motion.div
              animate={{
                x: [0, -40, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-orange-400/30 rounded-full blur-lg opacity-70"
            />
            <motion.div
              animate={{
                x: [0, 25, 0],
                y: [0, -15, 0],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-orange-300/30 rounded-full blur-lg opacity-60"
            />
            <motion.div
              animate={{
                x: [0, -20, 0],
                y: [0, 20, 0],
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-1/3 left-1/3 w-[250px] h-[250px] bg-orange-600/20 rounded-full blur-md opacity-60"
            />
            <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#181c23] via-[#181c23]/90 via-[#181c23]/80 via-[#181c23]/70 to-orange-500/5" />
          </div>

          {/* Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-black mb-8">
                <span className="text-white">Nuestros</span>
                <br />
                <span className="text-gradient-rainbow">super poderes</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Especializados en crear soluciones digitales que transforman negocios
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0 
                  }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.05,
                    delay: index * 0.02
                  }}
                  whileHover={{ y: -8 }}
                  style={{ position: 'relative' }}
                >
                  <Card className="flex flex-col h-full p-8 bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:border-orange-500/30">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg transform transition-all duration-300 group-hover:scale-110`}>
                      {service.icon({})}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white transition-colors duration-300 group-hover:text-orange-400">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
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
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Logos Carousel */}
        <div className="relative py-12 overflow-hidden bg-gradient-to-r from-orange-50 via-pink-50 to-purple-50 backdrop-blur-[2px]">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white to-transparent z-10" />
          
          {/* Logos Container */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent mb-2">
                Empresas que confían en nosotros
              </h3>
              <p className="text-gray-500 text-lg font-light">
                Únete a las empresas líderes que han transformado su presencia digital con nosotros
              </p>
            </motion.div>
          </div>

          {/* Scrolling Logos */}
          <div className="relative max-w-full overflow-hidden">
            <LogoTrack>
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center min-w-[200px] h-24 group"
                >
                  <img
                    src={logo}
                    alt={`Company Logo ${index + 1}`}
                    className="max-h-16 w-auto object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                  />
                </div>
              ))}
            </LogoTrack>
          </div>
        </div>

        {/* Revolution Section */}
        <section className="relative py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              className="text-4xl md:text-6xl font-black text-center mb-12"
              style={{
                textShadow: '0 0 20px rgba(255, 107, 53, 0.15)'
              }}
            >
              ¿Listo para la<br />
              <span className="text-gradient-rainbow">Revolución Digital</span>?
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                Únete a cientos de empresarios que ya confiaron en nosotros para crear su presencia digital
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    className="bg-white text-purple-600 hover:bg-gray-100 rounded-full px-10 py-6 text-xl font-bold shadow-2xl"
                    onClick={handleLaunchProject}
                  >
                    <Sparkles className="mr-3 h-6 w-6" />
                    Comenzar ahora
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white/10 rounded-full px-10 py-6 text-xl backdrop-blur-sm"
                  >
                    <Calendar className="mr-3 h-6 w-6" />
                    Agendar consulta gratuita
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Project Wizard */}
      <Suspense fallback={
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/90 backdrop-blur-sm">
          <div className="text-white">Cargando...</div>
        </div>
      }>
        <ProjectWizard 
          isOpen={isWizardOpen} 
          onClose={() => setIsWizardOpen(false)} 
        />
      </Suspense>
    </main>
  );
};

export default Home;