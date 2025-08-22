import { useEffect, useState, useRef } from 'react';

export const useIntersectionObserver = (threshold = 0.1) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        
        // Only set visible to true when intersecting, but keep it true for a while after leaving
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Delay hiding to avoid flickering
          setTimeout(() => setIsVisible(false), 2000);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isIntersecting, isVisible };
};

// Optimized 3D loader hook
export const use3DLoader = (modelPath: string, delay = 0) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (shouldLoad) {
      // Preload the model
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = modelPath;
      link.as = 'fetch';
      link.crossOrigin = 'anonymous';
      
      link.onload = () => setIsLoaded(true);
      link.onerror = () => console.warn(`Failed to preload ${modelPath}`);
      
      document.head.appendChild(link);
      
      return () => {
        document.head.removeChild(link);
      };
    }
  }, [shouldLoad, modelPath]);

  return { isLoaded, shouldLoad };
};

export default useIntersectionObserver;
