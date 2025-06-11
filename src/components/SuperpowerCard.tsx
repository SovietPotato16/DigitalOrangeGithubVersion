import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SuperpowerCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const SuperpowerCard = ({ title, description, icon, link }: SuperpowerCardProps) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all hover:border-white/20">
      <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <Link
        to={link}
        className="inline-flex items-center text-sm font-medium text-white hover:text-orange-500 transition-all group shadow-[0_0_10px_rgba(249,115,22,0.1)] hover:shadow-[0_0_15px_rgba(249,115,22,0.2)]"
      >
        Más información
        <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default SuperpowerCard; 