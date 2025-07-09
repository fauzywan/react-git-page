const Button = ({ onClick = '', text, isActive = false, className = '' }) => {
  const isActiveClass = !isActive
    ? 'text-[var(--secondary)] bg-[var(--primary)]  '
    : 'bg-[var(--secondary)] text-[var(--primary)]  ';
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer flex items-center gap-2 text-sm font-bold transition-all duration-300
      px-4 py-2 rounded-full border ${isActiveClass} ${className}`}
    >
      {text}
      <svg
        className="w-[15px] h-[15px]"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
        />
      </svg>
    </button>
  );
};

export default Button;
