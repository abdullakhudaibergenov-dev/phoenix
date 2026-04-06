function Button({ children, variant = 'primary', className = '', ...props }) {
  const base =
    'inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold tracking-wide transition duration-300';
  const variants = {
    primary: 'bg-gold text-black hover:bg-goldSoft shadow-md',
    secondary: 'border border-gold/70 bg-transparent text-gold hover:border-gold hover:bg-gold/10',
  };

  return (
    <button type="button" className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
