function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition duration-300';
  const variants = {
    primary: 'bg-accent text-white hover:bg-blue-700 shadow-md',
    secondary: 'border border-slate-300 bg-white text-slate-900 hover:border-accent hover:text-accent',
  };

  return (
    <button type="button" className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
