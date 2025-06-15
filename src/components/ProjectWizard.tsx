import { useState, useEffect } from 'react';
import { 
  X, 
  ShoppingCart, 
  Globe, 
  Building2, 
  Stethoscope, 
  Scale, 
  HeartPulse 
} from 'lucide-react';
import ProjectFeatures from './ProjectFeatures';
import ProjectTimeline from './ProjectTimeline';

type ProjectType = 'website' | 'website_ecommerce' | 'medical' | 'legal' | 'dental' | 'enterprise';
type ProjectScale = 'small' | 'medium' | 'corporate' | 'startup';
type ProjectTimeline = 'urgent' | 'normal' | 'custom';

interface WizardStep {
  title: string;
  description: string;
}

const steps: WizardStep[] = [
  {
    title: "Tipo de Proyecto",
    description: "Selecciona el tipo de proyecto que mejor se adapte a tus necesidades"
  },
  {
    title: "Escala del Proyecto",
    description: "¿Cuál es el tamaño de tu organización?"
  },
  {
    title: "Funcionalidades",
    description: "Selecciona las características que necesitas"
  },
  {
    title: "Tiempo y Presupuesto",
    description: "¿Cuál es tu timeline ideal?"
  },
  {
    title: "Contacto",
    description: "Déjanos tus datos para enviarte nuestra propuesta"
  }
];

const projectTypes = [
  { 
    id: 'website', 
    name: 'Sitio Web', 
    description: 'Sitio web profesional para tu negocio',
    icon: Globe,
    isEligibleFor48Hours: true
  },
  { 
    id: 'website_ecommerce', 
    name: 'Sitio Web + E-commerce', 
    description: 'Sitio web con tienda en línea integrada',
    icon: ShoppingCart,
    isEligibleFor48Hours: false
  },
  { 
    id: 'medical', 
    name: 'Sistema para Consultorios Médicos', 
    description: 'Sistema de gestión para profesionales de la salud',
    icon: Stethoscope,
    isEligibleFor48Hours: false
  },
  { 
    id: 'legal', 
    name: 'Sistema para Despachos Jurídicos', 
    description: 'Plataforma de gestión para profesionales legales',
    icon: Scale,
    isEligibleFor48Hours: false
  },
  { 
    id: 'dental', 
    name: 'Sistema para Clínicas Dentales', 
    description: 'Software especializado para odontólogos',
    icon: HeartPulse,
    isEligibleFor48Hours: false
  },
  { 
    id: 'enterprise', 
    name: 'Sistema Empresarial', 
    description: 'Software personalizado para tu empresa',
    icon: Building2,
    isEligibleFor48Hours: false
  }
];

interface ProjectWizardProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProjectWizard = ({ isOpen, onClose }: ProjectWizardProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    projectType: '',
    scale: '',
    features: [] as string[],
    timeline: '',
    budget: '',
    email: '',
    name: '',
    phone: '',
    company: ''
  });

  useEffect(() => {
    if (!isOpen) {
      // Reset form when wizard is closed
      setCurrentStep(0);
      setFormData({
        projectType: '',
        scale: '',
        features: [],
        timeline: '',
        budget: '',
        email: '',
        name: '',
        phone: '',
        company: ''
      });
    }
  }, [isOpen]);

  const scales = [
    { 
      id: 'small_business', 
      name: 'Pequeño negocio', 
      description: 'Ideal para negocios locales y emprendedores' 
    },
    { 
      id: 'small_company', 
      name: 'Empresa pequeña', 
      description: 'Para empresas establecidas con equipo pequeño' 
    },
    { 
      id: 'medium_company', 
      name: 'Empresa mediana', 
      description: 'Para empresas en crecimiento con necesidades específicas' 
    },
    { 
      id: 'startup', 
      name: 'Startup', 
      description: 'Para empresas innovadoras y de rápido crecimiento' 
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementar envío de datos y recomendación de planes
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    // Solo cerrar si se hace clic directamente en el backdrop
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projectTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => {
                  setFormData({ ...formData, projectType: type.id });
                  handleNext();
                }}
                className={`p-6 rounded-2xl bg-white/5 backdrop-blur-sm border transition-all duration-200 hover:scale-105 active:scale-95 ${
                  formData.projectType === type.id ? 'border-orange-500' : 'border-white/10'
                } hover:border-orange-500/30 transition-all text-left group relative overflow-hidden`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-orange-400">
                    <type.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{type.name}</h3>
                    {(type.id === 'medical' || type.id === 'legal' || type.id === 'dental') && (
                      <span className="text-sm text-orange-400 font-medium">
                        {type.id === 'medical' || type.id === 'dental' ? 'OrangeDr' : 'OrangeLic'}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{type.description}</p>
                {(type.id === 'medical' || type.id === 'legal' || type.id === 'dental') && (
                  <div className="mt-4 text-xs text-orange-400/80">
                    * Incluye personalización según tus necesidades específicas
                  </div>
                )}
              </button>
            ))}
          </div>
        );

      case 1:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {scales.map((scale) => (
              <button
                key={scale.id}
                onClick={() => {
                  setFormData({ ...formData, scale: scale.id });
                  handleNext();
                }}
                className={`p-6 rounded-2xl bg-white/5 backdrop-blur-sm border transition-all duration-200 hover:scale-105 active:scale-95 ${
                  formData.scale === scale.id ? 'border-orange-500' : 'border-white/10'
                } hover:border-orange-500/30 transition-all text-left group`}
              >
                <h3 className="text-xl font-semibold text-white mb-2">{scale.name}</h3>
                <p className="text-gray-400">{scale.description}</p>
              </button>
            ))}
          </div>
        );

      case 2:
        return (
          <ProjectFeatures
            projectType={formData.projectType}
            selectedFeatures={formData.features}
            onFeatureToggle={(featureId) => {
              const features = formData.features.includes(featureId)
                ? formData.features.filter(id => id !== featureId)
                : [...formData.features, featureId];
              setFormData({ ...formData, features });
            }}
          />
        );

      case 3:
        const selectedType = projectTypes.find(type => type.id === formData.projectType);
        return (
          <ProjectTimeline
            selectedTimeline={formData.timeline}
            selectedBudget={formData.budget}
            onTimelineSelect={(timelineId) => {
              // Si el proyecto no es elegible para entrega en 48 horas y se intenta seleccionar 'urgent',
              // no permitir la selección
              if (!selectedType?.isEligibleFor48Hours && timelineId === 'urgent') {
                return;
              }
              setFormData({ ...formData, timeline: timelineId });
            }}
            onBudgetSelect={(budgetId) => setFormData({ ...formData, budget: budgetId })}
            disableUrgent={!selectedType?.isEligibleFor48Hours}
          />
        );

      case 4:
        return (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Correo electrónico *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 transition-colors"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 transition-colors"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 transition-colors"
                placeholder="Tu número de teléfono"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                Empresa
              </label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 transition-colors"
                placeholder="Nombre de tu empresa"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Enviar y ver recomendación
            </button>
          </form>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto transition-opacity duration-200"
          onClick={handleBackdropClick}
        >
          <div className="min-h-screen px-4 text-center">
            <div className="fixed inset-0 bg-gray-900/90 backdrop-blur-sm transition-opacity duration-200" />
            
            <div
              className="relative inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transform transition-all duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative bg-gray-900/80 backdrop-blur-md p-8 rounded-2xl border border-white/10">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
                >
                  <X className="h-6 w-6 text-gray-400" />
                </button>

                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-white mb-2">{steps[currentStep].title}</h2>
                  <p className="text-gray-400">{steps[currentStep].description}</p>
                </div>

                <div className="mb-8">
                  <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="absolute h-full bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300"
                      style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                    />
                  </div>
                </div>

                {renderStep()}

                <div className="mt-8 flex justify-between">
                  {currentStep > 0 && (
                    <button
                      onClick={handleBack}
                      className="px-6 py-3 text-white bg-white/10 rounded-lg font-medium hover:bg-white/20 transition-all duration-200 hover:scale-105 active:scale-95"
                    >
                      Anterior
                    </button>
                  )}
                  {currentStep < steps.length - 1 && (
                    <button
                      onClick={handleNext}
                      className="px-6 py-3 text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-200 hover:scale-105 active:scale-95"
                    >
                      Siguiente
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectWizard; 