import { useEffect } from 'react';

const useScrollEffects = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (window.scrollY > 50) {
        if (header) {
          header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
        }
      } else {
        if (header) {
          header.style.boxShadow = 'none';
        }
      }
    };

    // Add a small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      window.addEventListener('scroll', handleScroll);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

export default useScrollEffects;
