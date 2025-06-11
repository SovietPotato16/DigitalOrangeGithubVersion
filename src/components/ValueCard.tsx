interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard = ({ icon, title, description }: ValueCardProps) => {
  return (
    <div className="bg-white backdrop-blur-sm border border-gray-100 rounded-2xl p-6 transition-all hover:shadow-lg">
      <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 text-orange-500">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ValueCard; 