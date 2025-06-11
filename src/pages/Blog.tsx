import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import BlogCard from '@/components/blog/BlogCard';
import { useMDXPosts } from '@/hooks/useMDXPosts';
import type { Post } from '@/hooks/useMDXPosts';

const Blog = () => {
  console.log('Blog component rendering'); // Debug log
  const { posts, isLoading, error } = useMDXPosts();
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [categories, setCategories] = useState<string[]>([]);

  // Debug logs
  useEffect(() => {
    console.log('Posts:', posts);
    console.log('Loading:', isLoading);
    console.log('Error:', error);
  }, [posts, isLoading, error]);

  // Extract unique categories from posts
  useEffect(() => {
    if (posts.length > 0) {
      const uniqueCategories = Array.from(
        new Set(posts.flatMap(post => post.metadata.categories))
      );
      setCategories(uniqueCategories);
      setFilteredPosts(posts);
    }
  }, [posts]);

  // Filter posts based on search and category
  useEffect(() => {
    if (!posts) return;

    let result = posts;

    if (searchTerm) {
      result = result.filter(post =>
        post.metadata.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.metadata.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      result = result.filter(post =>
        post.metadata.categories.includes(selectedCategory)
      );
    }

    setFilteredPosts(result);
  }, [searchTerm, selectedCategory, posts]);

  if (error) {
    console.error('Blog error:', error); // Debug log
    return (
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-red-500">
            Error al cargar los posts
          </h1>
          <p className="text-gray-400 mt-2">
            Por favor, intenta recargar la página
          </p>
          <pre className="mt-4 p-4 bg-gray-800 rounded-lg text-left overflow-auto">
            {error.message}
          </pre>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestro Blog
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explora artículos sobre diseño web, desarrollo, y las últimas tendencias digitales
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mb-12 flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Buscar artículos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all text-white placeholder-gray-400"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('')}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                !selectedCategory
                  ? 'bg-orange-500 text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              Todos
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-white/5 rounded-2xl overflow-hidden border border-white/10"
              >
                {/* Imagen placeholder */}
                <div className="aspect-[16/9] bg-white/10 animate-pulse" />
                <div className="p-6 space-y-4">
                  {/* Título placeholder */}
                  <div className="h-6 bg-white/10 rounded-lg w-3/4 animate-pulse" />
                  {/* Extracto placeholder */}
                  <div className="space-y-2">
                    <div className="h-4 bg-white/10 rounded w-full animate-pulse" />
                    <div className="h-4 bg-white/10 rounded w-2/3 animate-pulse" />
                  </div>
                  {/* Categorías placeholder */}
                  <div className="flex flex-wrap gap-2">
                    <div className="h-6 w-20 bg-white/10 rounded-full animate-pulse" />
                    <div className="h-6 w-24 bg-white/10 rounded-full animate-pulse" />
                  </div>
                  {/* Autor y fecha placeholder */}
                  <div className="flex justify-between items-center pt-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-white/10 rounded-full animate-pulse" />
                      <div className="h-4 bg-white/10 rounded w-24 animate-pulse" />
                    </div>
                    <div className="h-4 bg-white/10 rounded w-20 animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.metadata.title}
                  excerpt={post.metadata.excerpt}
                  date={post.metadata.date}
                  author={{
                    name: post.metadata.author,
                    avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(post.metadata.author)}&background=FF6B00&color=fff&size=128`
                  }}
                  coverImage={post.metadata.coverImage}
                  categories={post.metadata.categories}
                />
              ))}
            </div>

            {/* Empty State */}
            {filteredPosts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-gray-400 text-lg">
                  No se encontraron artículos que coincidan con tu búsqueda.
                </p>
              </motion.div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Blog; 