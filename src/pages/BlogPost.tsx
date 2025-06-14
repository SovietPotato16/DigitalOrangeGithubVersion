import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { useHugoPosts } from '@/hooks/useHugoPosts';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { posts, isLoading, error } = useHugoPosts();
  const post = posts.find(p => p.slug === slug);

  if (isLoading) {
    return (
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-white/10 rounded w-3/4 mb-8" />
            <div className="aspect-[16/9] bg-white/10 rounded-2xl mb-8" />
            <div className="space-y-4">
              <div className="h-4 bg-white/10 rounded w-full" />
              <div className="h-4 bg-white/10 rounded w-5/6" />
              <div className="h-4 bg-white/10 rounded w-4/6" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-red-500 mb-4">
            {error ? 'Error al cargar el post' : 'Post no encontrado'}
          </h1>
          <Link
            to="/blog"
            className="inline-flex items-center text-orange-500 hover:text-orange-400"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link
          to="/blog"
          className="inline-flex items-center text-gray-400 hover:text-orange-500 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver al blog
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {post.title}
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            {post.summary}
          </p>

          {/* Author and date */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src={post.author.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(post.author.name)}&background=FF6B00&color=fff&size=128`}
                alt={post.author.name}
                className="w-10 h-10 rounded-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(post.author.name)}&background=FF6B00&color=fff&size=128`;
                }}
              />
              <div>
                <span className="block text-sm font-medium text-white">
                  {post.author.name}
                </span>
                <span className="text-xs text-gray-400">
                  {post.author.bio}
                </span>
              </div>
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <Calendar className="w-4 h-4 mr-1" />
              <time dateTime={post.date}>
                {format(new Date(post.date), 'd MMMM, yyyy', { locale: es })}
              </time>
            </div>
          </div>
        </motion.div>

        {/* Cover image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <img
            src={post.coverImage || '/images/blog/placeholder.jpg'}
            alt={post.title}
            className="w-full aspect-[16/9] object-cover rounded-2xl"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/images/blog/placeholder.jpg';
            }}
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-invert prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <h3 className="text-lg font-medium mb-4">Categorías</h3>
          <div className="flex flex-wrap gap-2">
            {post.categories.map((category) => (
              <span
                key={category}
                className="px-4 py-2 bg-white/5 text-white rounded-xl text-sm"
              >
                {category}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost; 