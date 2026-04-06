import { useEffect, useRef, useState } from 'react';

const useInViewOnce = (options = {}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current || isInView) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -40px 0px',
        ...options,
      },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isInView, options]);

  return { ref, isInView };
};

export default useInViewOnce;
