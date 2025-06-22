import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Twitter, Linkedin } from 'lucide-react';
import BlogCard from '@/components/blog/BlogCard';
import postsData from '@/data/posts.json';
import authorsData from '@/data/authors.json';
import { slugify } from '@/lib/utils';
import WhatsAppButton from '@/components/WhatsAppButton';

const AuthorPage = () => {
  const { authorId } = useParams<{ authorId: string }>();

  // Datos
  const authors = (authorsData as any).authors as Array<{
    id: string;
    name: string;
    bio: string;
    avatar: string;
    social?: Record<string, string>;
  }>;

  const author = authors.find((a) => a.id === authorId);

  // Filtra posts que correspondan al autor (comparando slugify(nombre))
  const posts = (postsData as any).posts.filter((p: any) => slugify(p.author.name) === authorId);

  if (!author) {
    return (
      <div className="pt-24 pb-16 text-center">
        <h1 className="text-3xl font-bold">Autor no encontrado</h1>
        <Link to="/blog" className="text-orange-500 hover:underline mt-4 inline-block">
          Volver al blog
        </Link>
      </div>
    );
  }

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

        {/* Author header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <img
            src={author.avatar}
            alt={author.name}
            className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
          />
          <h1 className="text-3xl font-bold mb-2">{author.name}</h1>
          <p className="text-gray-400 max-w-xl mx-auto">{author.bio}</p>
          {/* Social links */}
          {author.social && (
            <div className="flex justify-center gap-4 mt-4">
              {author.social.twitter && (
                <a href={author.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </a>
              )}
              {author.social.linkedin && (
                <a href={author.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
            </div>
          )}
        </motion.div>

        {/* Posts */}
        {posts.length === 0 ? (
          <p className="text-gray-400 text-center">Este autor aún no tiene artículos publicados.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                excerpt={post.summary}
                date={post.date}
                author={post.author}
                coverImage={post.coverImage}
                categories={post.categories}
              />
            ))}
          </div>
        )}
      </div>
      
      {/* Botón flotante de WhatsApp */}
      <WhatsAppButton />
    </div>
  );
};

export default AuthorPage; 