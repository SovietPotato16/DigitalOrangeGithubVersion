import { useEffect, useState } from 'react';
import { bundleMDX } from 'mdx-bundler';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';

interface PostMetadata {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  categories: string[];
  coverImage: string;
  seo: {
    keywords: string[];
    description: string;
  };
}

interface Post {
  slug: string;
  metadata: PostMetadata;
  code: string;
}

// Datos de ejemplo mientras implementamos el backend
const EXAMPLE_POSTS: Post[] = [
  {
    slug: 'diseno-web-moderno-2024',
    metadata: {
      title: 'Diseño Web Moderno en 2024: Tendencias y Mejores Prácticas',
      excerpt: 'Descubre las últimas tendencias en diseño web y cómo implementarlas en tus proyectos para crear experiencias digitales impactantes y efectivas.',
      date: '2024-03-20',
      author: 'juan-perez',
      categories: ['Diseño Web', 'Tendencias', 'UX/UI'],
      coverImage: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1470&auto=format&fit=crop',
      seo: {
        keywords: ['diseño web 2024', 'tendencias diseño web', 'ui design', 'ux design', 'web moderna'],
        description: 'Guía completa sobre las tendencias de diseño web en 2024: desde interfaces minimalistas hasta experiencias inmersivas. Aprende a implementar las últimas innovaciones en tus proyectos.'
      }
    },
    code: `# Diseño Web Moderno en 2024

El diseño web está en constante evolución, y 2024 no es la excepción. En este artículo, exploraremos las tendencias más relevantes y cómo implementarlas de manera efectiva en tus proyectos.

## 1. Minimalismo Funcional

El minimalismo sigue siendo una tendencia dominante, pero con un enfoque en la funcionalidad. Ya no se trata solo de espacios en blanco y diseños limpios, sino de crear interfaces que:

* Prioricen la legibilidad y usabilidad
* Mantengan una jerarquía visual clara
* Utilicen animaciones sutiles y significativas

## 2. Diseño Inmersivo

Las experiencias inmersivas están ganando popularidad, especialmente con el auge de las tecnologías 3D y la realidad virtual. Algunas características clave incluyen:

* Animaciones fluidas y naturales
* Interacciones significativas
* Experiencias personalizadas
* Diseño adaptativo

## 3. Rendimiento y Accesibilidad

La optimización del rendimiento y la accesibilidad son fundamentales:

* Tiempos de carga rápidos
* Diseño responsivo
* Contraste adecuado
* Navegación intuitiva

## Conclusión

El diseño web moderno requiere un equilibrio entre estética y funcionalidad, siempre priorizando la experiencia del usuario.`
  }
];

export const useMDXPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        console.log('Starting to load posts...'); // Debug log
        setPosts(EXAMPLE_POSTS);
        setIsLoading(false);
      } catch (err) {
        console.error('Error loading posts:', err);
        setError(err as Error);
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);

  return { posts, isLoading, error };
};

export type { Post, PostMetadata }; 