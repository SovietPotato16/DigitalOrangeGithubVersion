import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  coverImage: string;
  categories: string[];
}

const BlogCard = ({ slug, title, excerpt, date, author, coverImage, categories }: BlogCardProps) => {
  console.log('Rendering BlogCard:', { slug, title }); // Debug log

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-orange-500/30 transition-colors"
    >
      <Link to={`/blog/${slug}`} className="block">
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={coverImage || 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1469&auto=format&fit=crop'}
            alt={title}
            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              console.error('Error loading image:', coverImage);
              e.currentTarget.src = 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1469&auto=format&fit=crop';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          
          {/* Categories */}
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            {categories.map((category) => (
              <span
                key={category}
                className="px-3 py-1 text-xs font-medium bg-black/50 text-white rounded-full backdrop-blur-sm"
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-xl font-bold mb-2 text-white group-hover:text-orange-400 transition-colors">
            {title}
          </h2>
          <p className="text-gray-400 mb-4 line-clamp-2">
            {excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            {/* Author info */}
            <div className="flex items-center space-x-3">
              <img
                src={author.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(author.name)}&background=FF6B00&color=fff&size=128`}
                alt={author.name}
                className="w-8 h-8 rounded-full object-cover"
                onError={(e) => {
                  console.error('Error loading avatar:', author.avatar);
                  e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(author.name)}&background=FF6B00&color=fff&size=128`;
                }}
              />
              <span className="text-sm text-gray-400">{author.name}</span>
            </div>
            
            {/* Date */}
            <time className="text-sm text-gray-500">
              {format(new Date(date), "d 'de' MMMM, yyyy", { locale: es })}
            </time>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard; 