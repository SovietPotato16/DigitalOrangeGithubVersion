import { useState, useEffect } from 'react';

export interface HugoPost {
  title: string;
  date: string;
  slug: string;
  summary: string;
  content: string;
  author: {
    name: string;
    bio: string;
    avatar: string;
  };
  categories: string[];
  tags: string[];
  coverImage: string;
}

export const useHugoPosts = () => {
  const [posts, setPosts] = useState<HugoPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/index.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPosts(data.posts || []);
      } catch (err) {
        console.error('Error loading posts:', err);
        setError(err instanceof Error ? err : new Error('Failed to load posts'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, isLoading, error };
};
