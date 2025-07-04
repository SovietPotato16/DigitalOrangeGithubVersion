import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Descubre la magia de la vida
        </h1>
        <p className="text-base text-gray-700 mb-8">
          Descubre cómo puedes transformar tu vida y alcanzar tus metas.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl transition-all duration-300 hover:bg-orange-500 hover:border-orange-500 hover:text-orange-50 group"
        >
          Ver portafolio
          <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default Hero; 