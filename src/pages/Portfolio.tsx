import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Globe, Store, Building2, Stethoscope, Scale, HeartPulse, Menu } from 'lucide-react';
import { ExternalLink, Github, ArrowRight, Calendar, Users, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import WhatsAppButton from '@/components/WhatsAppButton';

// Define the project type
interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
  icon: React.ElementType;
  link?: string;
}

const Portfolio: React.FC = () => {
  // State for active category
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  // Sample projects data
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Moderno",
      description: "Tienda online con sistema de pagos y gestión de inventario",
      category: "E-commerce",
      image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      icon: Store
    },
    {
      id: 2,
      title: "Portal Corporativo",
      description: "Sitio web corporativo con blog y área de clientes",
      category: "Sitios Web",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      technologies: ["Next.js", "Tailwind CSS", "Sanity CMS"],
      icon: Globe
    },
    {
      id: 3,
      title: "Sistema de Gestión Médica",
      description: "Plataforma para gestión de citas y expedientes médicos",
      category: "Consultorios Médicos",
      image: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg",
      technologies: ["React", "Firebase", "Material UI"],
      icon: Stethoscope
    },
    {
      id: 4,
      title: "ERP Empresarial",
      description: "Sistema integral de gestión empresarial",
      category: "Sistemas Empresariales",
      image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg",
      technologies: ["Vue.js", "Laravel", "PostgreSQL"],
      icon: Building2
    },
    {
      id: 5,
      title: "Gestión Legal",
      description: "Plataforma para gestión de casos y clientes legales",
      category: "Despachos Jurídicos",
      image: "https://images.pexels.com/photos/5668862/pexels-photo-5668862.jpeg",
      technologies: ["React", "Django", "PostgreSQL"],
      icon: Scale
    },
    {
      id: 6,
      title: "Clínica Dental Digital",
      description: "Sistema de gestión para clínicas dentales",
      category: "Clínicas Dentales",
      image: "https://images.pexels.com/photos/3845811/pexels-photo-3845811.jpeg",
      technologies: ["React", "Node.js", "MongoDB"],
      icon: HeartPulse
    },
    {
      id: 7,
      title: "Menú Digital El Chipil",
      description: "Sitio de comida mexicana gourmet y menú interactivo optimizado para dispositivos móviles.",
      category: "Sitios Web",
      image: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg",
      technologies: ["React", "Vite", "Tailwind CSS", "PWA"],
      icon: Menu,
      link: "https://elchipil.digitalorange.com.mx"
    }
  ];

  // Get unique categories
  const categories = ['Todos', ...new Set(projects.map(project => project.category))];

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'Todos' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

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
                Nuestro
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Portafolio
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Descubre nuestros proyectos más destacados y cómo hemos ayudado a empresas a alcanzar sus objetivos digitales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="pt-4 pb-12 bg-gray-900/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-xl text-lg font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="bg-white/5 backdrop-blur-sm hover:border-orange-500/30 transition-all overflow-hidden h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 group-hover:scale-110 transition-transform">
                        <project.icon className="w-5 h-5" />
                      </div>
                      <span className="text-sm text-gray-400">{project.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-orange-400 hover:underline mb-2"
                      >
                        Ver sitio
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          className="bg-gray-800/50 text-gray-200 hover:bg-gray-700/50"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Botón flotante de WhatsApp */}
      <WhatsAppButton />
    </div>
  );
};

export default Portfolio; 