import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, CheckCircle, Star, Sparkles, Calendar, Eye, Rocket, Globe, Store, Building2, Stethoscope, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ProjectWizard from '@/components/ProjectWizard';

const Home = () => {
  const [isWizardOpen, setIsWizardOpen] = useState(false);

  const handleLaunchProject = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWizardOpen(true);
  };

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
    }
  ];

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
              Entrega en 48 horas ⚡
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="flex flex-col h-full p-6 bg-black/40 backdrop-blur-xl border border-white/10 hover:border-orange-500/30 transition-all hover:-translate-y-2">
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
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-8">
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
              <Card key={index} className="flex flex-col h-full p-8 bg-white/5 backdrop-blur-md border border-white/10 hover:border-orange-500/30 transition-all hover:-translate-y-2 group">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-transform group-hover:scale-110`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-orange-400 transition-colors">
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
            ))}
          </div>
        </div>
      </section>

      {/* Brands Carousel Section */}
      <section className="relative py-20 bg-white/5 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Confían en nosotros
            </h2>
            <p className="text-lg text-gray-400">
              Empresas que han transformado su presencia digital con Digital Orange
            </p>
          </div>
          
          {/* Brands Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[
              { name: 'TechStart', logo: '🚀' },
              { name: 'FoodieMax', logo: '🍕' },
              { name: 'StyleCo', logo: '👔' },
              { name: 'HealthPro', logo: '🏥' },
              { name: 'EduTech', logo: '📚' },
              { name: 'GreenLife', logo: '🌱' },
              { name: 'AutoMax', logo: '🚗' },
              { name: 'FitZone', logo: '💪' },
              { name: 'ArtSpace', logo: '🎨' },
              { name: 'LegalPro', logo: '⚖️' },
              { name: 'TravelWise', logo: '✈️' },
              { name: 'PhotoStudio', logo: '📸' }
            ].map((brand, index) => (
              <div 
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-500/30 transition-all hover:scale-105 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {brand.logo}
                </div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-orange-400 transition-colors">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">500+</div>
              <div className="text-sm text-gray-400">Proyectos completados</div>
            </div>
            <div className="p-6">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">48h</div>
              <div className="text-sm text-gray-400">Tiempo promedio</div>
            </div>
            <div className="p-6">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">99%</div>
              <div className="text-sm text-gray-400">Satisfacción</div>
            </div>
            <div className="p-6">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-sm text-gray-400">Soporte</div>
            </div>
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
    </main>
  );
};

export default Home;