import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop ensures that when a route changes, the window scrolls back to the very top.
 * This prevents users from landing mid-page when navigating between pages.
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Using an instant scroll so that the new page starts at the top.
    // setTimeout is used to allow the next page to mount before scrolling.
    // This helps when pages run heavy layout effects on mount.
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, 0);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}

export default ScrollToTop; 