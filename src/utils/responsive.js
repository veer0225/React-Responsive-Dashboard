import { useState, useEffect } from 'react';

// Responsive utility functions
export const getBreakpoint = () => {
  const width = window.innerWidth;
  
  if (width >= 1400) return 'xl';
  if (width >= 1200) return 'lg';
  if (width >= 992) return 'md';
  if (width >= 768) return 'sm';
  if (width >= 576) return 'xs';
  return 'xxs';
};

export const isMobile = () => {
  return window.innerWidth < 992;
};

export const isTablet = () => {
  return window.innerWidth >= 768 && window.innerWidth < 992;
};

export const isDesktop = () => {
  return window.innerWidth >= 992;
};

export const useResponsive = () => {
  const [breakpoint, setBreakpoint] = useState(getBreakpoint());
  
  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(getBreakpoint());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return {
    breakpoint,
    isMobile: isMobile(),
    isTablet: isTablet(),
    isDesktop: isDesktop()
  };
};
