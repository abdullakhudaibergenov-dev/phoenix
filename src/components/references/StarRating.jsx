function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1 text-xl">
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} className={index < rating ? 'text-gold' : 'text-zinc-600'}>
          ★
        </span>
      ))}
      <span className="ml-2 text-sm font-medium text-zinc-300">{rating}/5</span>
    </div>
  );
}

export default StarRating;
