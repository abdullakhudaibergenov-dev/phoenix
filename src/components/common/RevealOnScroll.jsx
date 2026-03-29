import useInViewOnce from '../../hooks/useInViewOnce';

function RevealOnScroll({ children, className = '', delay = 0 }) {
  const { ref, isInView } = useInViewOnce();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        isInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default RevealOnScroll;
