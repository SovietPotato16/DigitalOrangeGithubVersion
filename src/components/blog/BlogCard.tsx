import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
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

const BlogCard = ({
  slug,
  title,
  excerpt,
  date,
  author,
  coverImage,
  categories,
}: BlogCardProps) => {
  // Convert author name to URL-friendly ID
  const authorId = author.name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-');

  console.log('Rendering BlogCard:', { slug, title }); // Debug log

  return (
    <article className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-orange-500/50 transition-all group">
      <Link to={`/blog/${slug}`} className="block">
        <div className="aspect-[16/9] relative overflow-hidden">
          <img
            src={coverImage || 'https://source.unsplash.com/featured/800x450?web'}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://source.unsplash.com/featured/800x450?web';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </Link>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map((category) => (
            <span
              key={category}
              className="px-3 py-1 text-xs font-medium bg-orange-500/10 text-orange-500 rounded-full"
            >
              {category}
            </span>
          ))}
        </div>

        <Link to={`/blog/${slug}`} className="block group">
          <h2 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors line-clamp-2">
            {title}
          </h2>
          <p className="text-gray-400 line-clamp-3 mb-4">{excerpt}</p>
        </Link>

        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <Link
            to={`/blog/author/${authorId}`}
            className="flex items-center space-x-3 group"
          >
            <img
              src={author.avatar}
              alt={author.name}
              className="w-8 h-8 rounded-full"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(author.name)}&background=FF6B00&color=fff&size=128`;
              }}
            />
            <span className="text-sm text-gray-400 group-hover:text-orange-500 transition-colors">
              {author.name}
            </span>
          </Link>
          <div className="flex items-center text-sm text-gray-400">
            <Calendar className="w-4 h-4 mr-1" />
            <time dateTime={date}>
              {format(new Date(date), 'd MMMM, yyyy', { locale: es })}
            </time>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard; 