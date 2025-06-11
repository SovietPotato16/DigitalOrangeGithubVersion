import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface Feature {
  id: string;
  name: string;
  description: string;
  infoLink?: string;
}

const getFeaturesByType = (projectType: string): Feature[] => {
  switch (projectType) {
    case 'website':
      return [
        { id: 'responsive', name: 'Diseño Responsivo', description: 'Adaptable a todos los dispositivos' },
        { id: 'seo', name: 'Optimización SEO', description: 'Mejor posicionamiento en buscadores' },
        { id: 'analytics', name: 'Analytics', description: 'Estadísticas y análisis de visitantes' },
        { id: 'blog', name: 'Blog', description: 'Sistema de publicación de contenido' },
        { id: 'forms', name: 'Formularios', description: 'Formularios de contacto y suscripción' },
        { id: 'social', name: 'Redes Sociales', description: 'Integración con redes sociales' }
      ];
    case 'website_ecommerce':
      return [
        { id: 'products', name: 'Catálogo de Productos', description: 'Gestión de productos y categorías' },
        { id: 'cart', name: 'Carrito de Compras', description: 'Sistema de carrito y checkout' },
        { id: 'payments', name: 'Pagos en Línea', description: 'Integración con pasarelas de pago' },
        { id: 'inventory', name: 'Gestión de Inventario', description: 'Control de stock y variantes' },
        { id: 'shipping', name: 'Envíos', description: 'Cálculo de costos de envío' },
        { id: 'reviews', name: 'Reseñas', description: 'Sistema de reseñas y calificaciones' }
      ];
    case 'medical':
      return [
        { 
          id: 'orangedr', 
          name: 'OrangeDr', 
          description: 'Sistema completo de gestión médica con expedientes, citas y seguimiento de pacientes',
          infoLink: '/orangedr'
        },
        { id: 'appointments', name: 'Sistema de Citas', description: 'Gestión avanzada de agenda y recordatorios' },
        { id: 'records', name: 'Expedientes Digitales', description: 'Historial médico completo y seguro' },
        { id: 'prescriptions', name: 'Recetas Electrónicas', description: 'Generación y control de recetas' },
        { id: 'billing', name: 'Facturación', description: 'Sistema de facturación para consultas y servicios' },
        { id: 'reports', name: 'Reportes', description: 'Informes y estadísticas de la práctica médica' }
      ];
    case 'legal':
      return [
        { 
          id: 'orangelic', 
          name: 'OrangeLic', 
          description: 'Sistema integral para despachos con gestión de casos, documentos y seguimiento',
          infoLink: '/orangelic'
        },
        { id: 'cases', name: 'Gestión de Casos', description: 'Seguimiento y control de casos legales' },
        { id: 'documents', name: 'Gestión Documental', description: 'Biblioteca digital de documentos legales' },
        { id: 'calendar', name: 'Calendario Jurídico', description: 'Agenda de audiencias y vencimientos' },
        { id: 'billing', name: 'Facturación', description: 'Sistema de facturación para servicios legales' },
        { id: 'reports', name: 'Reportes', description: 'Informes y estadísticas del despacho' }
      ];
    case 'dental':
      return [
        { 
          id: 'orangedr_dental', 
          name: 'OrangeDr Dental', 
          description: 'Sistema completo para clínicas dentales con expedientes, tratamientos y seguimiento',
          infoLink: '/orangedr-dental'
        },
        { id: 'treatments', name: 'Control de Tratamientos', description: 'Seguimiento de tratamientos dentales' },
        { id: 'odontogram', name: 'Odontograma Digital', description: 'Registro visual de procedimientos' },
        { id: 'imaging', name: 'Gestión de Imágenes', description: 'Almacenamiento de radiografías y fotos' },
        { id: 'appointments', name: 'Sistema de Citas', description: 'Gestión de agenda y recordatorios' },
        { id: 'billing', name: 'Facturación', description: 'Sistema de facturación para tratamientos' }
      ];
    case 'enterprise':
      return [
        { id: 'erp', name: 'ERP Básico', description: 'Gestión empresarial integrada' },
        { id: 'crm', name: 'CRM', description: 'Gestión de relaciones con clientes' },
        { id: 'hr', name: 'Recursos Humanos', description: 'Gestión de personal y nómina' },
        { id: 'reports', name: 'Reportes', description: 'Informes y análisis avanzados' },
        { id: 'api', name: 'API', description: 'Integración con otros sistemas' },
        { id: 'security', name: 'Seguridad Avanzada', description: 'Protección y encriptación' }
      ];
    default:
      return [
        { id: 'custom', name: 'Personalizado', description: 'Características a medida' },
        { id: 'integration', name: 'Integraciones', description: 'Conexión con sistemas existentes' },
        { id: 'consulting', name: 'Consultoría', description: 'Asesoría especializada' }
      ];
  }
};

interface ProjectFeaturesProps {
  projectType: string;
  selectedFeatures: string[];
  onFeatureToggle: (featureId: string) => void;
}

export default function ProjectFeatures({ projectType, selectedFeatures, onFeatureToggle }: ProjectFeaturesProps) {
  const features = getFeaturesByType(projectType);
  
  const effectiveSelectedFeatures = [...selectedFeatures];
  const lockedFeatures = ['orangedr', 'orangelic', 'orangedr_dental'];
  
  if (projectType === 'medical' && !effectiveSelectedFeatures.includes('orangedr')) {
    effectiveSelectedFeatures.push('orangedr');
  }
  if (projectType === 'legal' && !effectiveSelectedFeatures.includes('orangelic')) {
    effectiveSelectedFeatures.push('orangelic');
  }
  if (projectType === 'dental' && !effectiveSelectedFeatures.includes('orangedr_dental')) {
    effectiveSelectedFeatures.push('orangedr_dental');
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {features.map((feature) => {
        const isLocked = lockedFeatures.includes(feature.id);
        const isSelected = effectiveSelectedFeatures.includes(feature.id);
        
        return (
          <motion.div
            key={feature.id}
            className={`p-6 rounded-2xl bg-white/5 backdrop-blur-sm border ${
              isSelected ? 'border-orange-500' : 'border-white/10'
            } hover:border-orange-500/30 transition-all relative overflow-hidden`}
          >
            <div 
              role="button"
              tabIndex={isLocked ? -1 : 0}
              onClick={() => !isLocked && onFeatureToggle(feature.id)}
              className={`flex items-start justify-between ${!isLocked && 'cursor-pointer'}`}
            >
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.name}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                isSelected ? 'bg-orange-500' : 'bg-white/10'
              } transition-colors`}>
                {isSelected && (
                  <Check className="w-4 h-4 text-white" />
                )}
              </div>
            </div>
            
            {feature.infoLink && (
              <div className="mt-4">
                <a 
                  href={feature.infoLink}
                  className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors text-sm group"
                >
                  Más información 
                  <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform ml-1">→</span>
                </a>
              </div>
            )}
            
            <div className={`absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 ${
              isSelected ? 'opacity-100' : ''
            } transition-opacity pointer-events-none`} />
          </motion.div>
        );
      })}
    </div>
  );
} 