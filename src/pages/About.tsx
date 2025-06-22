import { motion } from 'framer-motion';
import { Users, Award, Clock, Target, Heart, Zap } from 'lucide-react';
import { useState, lazy, Suspense, useEffect } from 'react';
import WhatsAppButton from '@/components/WhatsAppButton';

const ProjectWizard = lazy(() => import('@/components/ProjectWizard'));

const About = () => {
  console.log('About component rendered');
  const [isWizardOpen, setIsWizardOpen] = useState(false);

  useEffect(() => {
    console.log('Wizard state changed:', isWizardOpen);
  }, [isWizardOpen]);

  const values = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Velocidad',
      description: 'Entregamos resultados excepcionales en tiempo récord, sin comprometer la calidad.'
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Pasión',
      description: 'Amamos lo que hacemos y se refleja en cada proyecto que desarrollamos.'
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Precisión',
      description: 'Cada detalle cuenta. Nos enfocamos en crear soluciones perfectas para tu negocio.'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Innovación',
      description: 'Utilizamos las últimas tecnologías para crear experiencias digitales modernas.'
    }
  ];



  const handleLaunchProject = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWizardOpen(true);
  };

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
            className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-full blur-xl"
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
            className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-orange-400/10 to-orange-500/10 rounded-full blur-xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">
                Creamos experiencias
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                digitales extraordinarias
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Somos un equipo apasionado de diseñadores y desarrolladores comprometidos con transformar 
              ideas en sitios web que impulsan negocios y conectan con audiencias.
            </p>
          </motion.div>
        </div>
      </section>



      {/* Story Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">
                  Nuestra historia
                </span>
              </h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p className="text-justify">
                  Digital Orange Sites nació de una simple observación: muchos negocios perdían 
                  oportunidades por no tener una presencia digital profesional, principalmente 
                  debido a los largos tiempos de desarrollo y costos elevados.
                </p>
                <p className="text-justify">
                  Decidimos cambiar eso. Desarrollamos un proceso optimizado que nos permite 
                  entregar sitios web de alta calidad en solo 48 horas, sin sacrificar 
                  funcionalidad ni diseño.
                </p>

              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden group">
                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                  alt="Equipo trabajando"
                  className="rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <Award className="h-12 w-12 text-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-900/50 backdrop-blur-lg border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Nuestros valores
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Los principios que guían cada decisión y cada proyecto que desarrollamos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/30 transition-all group"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange-500/10 text-orange-400 mb-4 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 opacity-100" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Trabajamos juntos?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Estamos emocionados de conocer tu proyecto y ayudarte a alcanzar tus objetivos digitales
            </p>
            <button
              type="button"
              onClick={handleLaunchProject}
              className="bg-white text-orange-600 hover:bg-orange-50 rounded-full px-8 py-4 text-lg font-semibold transition-colors inline-flex items-center group shadow-xl hover:shadow-2xl cursor-pointer"
            >
              <Users className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Lanzar proyecto
            </button>
          </motion.div>
        </div>

        {/* Decorative elements */}
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
          className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
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
          className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-xl"
        />
      </section>

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
      
      {/* Botón flotante de WhatsApp */}
      <WhatsAppButton />
    </div>
  );
};

export default About;