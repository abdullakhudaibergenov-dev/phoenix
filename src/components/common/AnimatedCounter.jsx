import { useEffect, useState } from 'react';
import useInViewOnce from '../../hooks/useInViewOnce';

function AnimatedCounter({ value, suffix = '', duration = 1600 }) {
  const { ref, isInView } = useInViewOnce();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return undefined;

    let animationFrame;
    let startTime;

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [duration, isInView, value]);

  return (
    <span ref={ref} className="text-4xl font-bold text-gold sm:text-5xl">
      {count}
      {suffix}
    </span>
  );
}

export default AnimatedCounter;
