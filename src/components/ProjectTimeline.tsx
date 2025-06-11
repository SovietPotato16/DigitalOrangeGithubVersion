import { motion } from 'framer-motion';
import { Clock, Calendar, Hourglass } from 'lucide-react';

interface TimelineOption {
  id: string;
  name: string;
  description: string;
  icon: JSX.Element;
  price: string;
}

const timelineOptions: TimelineOption[] = [
  {
    id: 'urgent',
    name: 'Urgente (48h)',
    description: 'Entrega en 48 horas con prioridad máxima',
    icon: <Clock className="w-6 h-6" />,
    price: '+50% sobre tarifa base'
  },
  {
    id: 'normal',
    name: 'Normal (2-4 semanas)',
    description: 'Desarrollo y entrega en 2-4 semanas',
    icon: <Calendar className="w-6 h-6" />,
    price: 'Tarifa base'
  },
  {
    id: 'custom',
    name: 'Personalizado',
    description: 'Nos adaptamos a tus necesidades',
    icon: <Hourglass className="w-6 h-6" />,
    price: 'Sujeto a cargos adicionales *'
  }
];

interface BudgetRange {
  id: string;
  range: string;
  description: string;
}

const budgetRanges: BudgetRange[] = [
  {
    id: 'small',
    range: '$1,000 - $3,000',
    description: 'Proyectos pequeños y sitios web básicos'
  },
  {
    id: 'medium',
    range: '$3,000 - $7,000',
    description: 'Sitios web avanzados y tiendas en línea'
  },
  {
    id: 'large',
    range: '$7,000 - $15,000',
    description: 'Sistemas empresariales y soluciones complejas'
  },
  {
    id: 'enterprise',
    range: '$15,000+',
    description: 'Proyectos a gran escala y desarrollos personalizados'
  }
];

interface ProjectTimelineProps {
  selectedTimeline: string;
  selectedBudget: string;
  onTimelineSelect: (timelineId: string) => void;
  onBudgetSelect: (budgetId: string) => void;
  disableUrgent?: boolean;
}

export default function ProjectTimeline({
  selectedTimeline,
  selectedBudget,
  onTimelineSelect,
  onBudgetSelect,
  disableUrgent = false
}: ProjectTimelineProps) {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Tiempo de entrega</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {timelineOptions.map((option) => {
            const isDisabled = disableUrgent && option.id === 'urgent';
            return (
              <motion.button
                key={option.id}
                whileHover={!isDisabled ? { scale: 1.02 } : {}}
                whileTap={!isDisabled ? { scale: 0.98 } : {}}
                onClick={() => !isDisabled && onTimelineSelect(option.id)}
                className={`p-6 rounded-2xl bg-white/5 backdrop-blur-sm border ${
                  selectedTimeline === option.id ? 'border-orange-500' : 'border-white/10'
                } hover:border-orange-500/30 transition-all text-left group relative ${
                  isDisabled ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  selectedTimeline === option.id ? 'bg-orange-500 text-white' : 'bg-white/10 text-orange-400'
                } group-hover:bg-orange-500/20 transition-colors ${
                  isDisabled ? 'bg-gray-500/20 text-gray-400' : ''
                }`}>
                  {option.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{option.name}</h4>
                <p className="text-gray-400 text-sm mb-2">{option.description}</p>
                <p className={`font-medium ${isDisabled ? 'text-gray-500' : 'text-orange-400'}`}>
                  {option.price}
                </p>
                {isDisabled && (
                  <div className="absolute inset-0 bg-gray-900/10 backdrop-blur-[1px] rounded-2xl pointer-events-none" />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Rango de presupuesto</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {budgetRanges.map((budget) => (
            <motion.button
              key={budget.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onBudgetSelect(budget.id)}
              className={`p-6 rounded-2xl bg-white/5 backdrop-blur-sm border ${
                selectedBudget === budget.id ? 'border-orange-500' : 'border-white/10'
              } hover:border-orange-500/30 transition-all text-left group`}
            >
              <h4 className="text-lg font-semibold text-white mb-2">{budget.range}</h4>
              <p className="text-gray-400">{budget.description}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
} 