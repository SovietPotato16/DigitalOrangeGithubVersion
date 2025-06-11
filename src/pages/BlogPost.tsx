import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import { useMDXPosts } from '@/hooks/useMDXPosts';
import type { Post } from '@/hooks/useMDXPosts';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { posts, isLoading, error } = useMDXPosts();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (!isLoading && posts.length > 0 && slug) {
      const foundPost = posts.find(p => p.slug === slug);
      if (foundPost) {
        console.log('Found post:', foundPost);
        setPost(foundPost);
      } else {
        console.log('Post not found for slug:', slug);
      }
    }
  }, [isLoading, posts, slug]);

  if (error) {
    return (
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-red-500">Error al cargar el post</h1>
          <p className="text-gray-400 mt-2">{error.message}</p>
          <Link to="/blog" className="text-orange-400 hover:text-orange-500 mt-4 inline-block">
            Volver al blog
          </Link>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse space-y-8">
            <div className="h-4 bg-white/5 rounded w-1/4" />
            <div className="space-y-4">
              <div className="h-8 bg-white/5 rounded w-3/4" />
              <div className="h-8 bg-white/5 rounded w-1/2" />
            </div>
            <div className="aspect-[16/9] bg-white/5 rounded-2xl" />
            <div className="space-y-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-4 bg-white/5 rounded w-full" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-white">Post no encontrado</h1>
          <Link to="/blog" className="text-orange-400 hover:text-orange-500 mt-4 inline-block">
            Volver al blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link
          to="/blog"
          className="inline-flex items-center space-x-2 text-orange-400 hover:text-orange-500 mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
          <span>Volver al blog</span>
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {post.metadata.title}
          </h1>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-8">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <time>{format(new Date(post.metadata.date), "d 'de' MMMM, yyyy", { locale: es })}</time>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>5 min de lectura</span>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.metadata.categories.map((category) => (
              <Link
                key={category}
                to={`/blog?category=${category}`}
                className="px-3 py-1 text-sm font-medium bg-white/5 text-orange-400 rounded-full hover:bg-white/10 transition-colors"
              >
                {category}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Cover image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-12"
        >
          <img
            src={post.metadata.coverImage}
            alt={post.metadata.title}
            className="object-cover w-full h-full"
            onError={(e) => {
              console.error('Error loading cover image:', post.metadata.coverImage);
              e.currentTarget.src = 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1470&auto=format&fit=crop';
            }}
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mdx-content"
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.code}
          </ReactMarkdown>
        </motion.div>

        {/* Share buttons */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => {
              navigator.share({
                title: post.metadata.title,
                text: post.metadata.excerpt,
                url: window.location.href
              }).catch(() => {
                navigator.clipboard.writeText(window.location.href);
              });
            }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-gray-400 hover:text-white transition-colors"
          >
            <Share2 className="h-4 w-4" />
            <span>Compartir artículo</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default BlogPost; 