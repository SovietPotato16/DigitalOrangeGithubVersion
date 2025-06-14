import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const AuthorPage = () => {
  const { authorId } = useParams<{ authorId: string }>();

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link
          to="/blog"
          className="inline-flex items-center text-gray-400 hover:text-orange-500 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver al blog
        </Link>

        {/* Temporary message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-2xl font-bold mb-4">
            Página de Autor en Construcción
          </h1>
          <p className="text-gray-400">
            Estamos trabajando en una nueva versión mejorada de esta página.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AuthorPage; 