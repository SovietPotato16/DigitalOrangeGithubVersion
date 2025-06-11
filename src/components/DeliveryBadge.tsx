import { Clock } from 'lucide-react';

const DeliveryBadge = () => {
  return (
    <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all">
      <Clock className="w-4 h-4 text-orange-500 mr-2" />
      <span className="text-sm font-medium text-white/80">Entrega en 48 hrs</span>
    </div>
  );
};

export default DeliveryBadge; 