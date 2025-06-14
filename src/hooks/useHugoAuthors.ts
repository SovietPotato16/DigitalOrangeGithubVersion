import { useState, useEffect } from 'react';

export interface HugoAuthor {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export function useHugoAuthors() {
  const [authors, setAuthors] = useState<Record<string, HugoAuthor>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch('/blog/authors.json')
      .then(res => res.json())
      .then(setAuthors)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, []);

  return { authors, isLoading, error };
}
