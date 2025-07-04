import React from 'react';
import { motion } from 'framer-motion';
import { PawPrint, Heart, Building2 } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

const SistemaCaninos = () => {
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
                <PawPrint className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">
                Sistema Caninos
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-amber-600 bg-clip-text text-transparent">
                Argentina
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
              Sistema ERP CRM especializado para empresas de productos para mascotas en Argentina. 
              Gestión integral de inventario, clientes y ventas para el mercado de productos caninos.
            </p>
            
            {/* Logo placeholder con imagen de LOGO CANINOS.png */}
            <div className="flex justify-center mb-8">
              <div className="w-32 h-32 bg-white/10 rounded-2xl p-4 flex items-center justify-center backdrop-blur-sm">
                <img 
                  src="/images/LOGO CANINOS.png" 
                  alt="Logo Caninos Argentina" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Características principales */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6"
              >
                <Building2 className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Gestión Empresarial</h3>
                <p className="text-gray-400">
                  Control completo de inventario, proveedores y distribución de productos para mascotas
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6"
              >
                <Heart className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">CRM Especializado</h3>
                <p className="text-gray-400">
                  Gestión de clientes especializada para el mercado de productos caninos y veterinarios
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6"
              >
                <PawPrint className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Mercado Argentino</h3>
                <p className="text-gray-400">
                  Adaptado específicamente para las necesidades del mercado argentino de productos para mascotas
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Botón flotante de WhatsApp */}
      <WhatsAppButton />
    </div>
  );
};

export default SistemaCaninos; 