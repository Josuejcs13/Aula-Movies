type ButtonProps = {
  children: string;
  handleClick: () => void;
  className?: string;
  color?: string;
  disabled?: boolean;
};

const Button = ({
  children,
  handleClick,
  className,
  color,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      className={`py-3 text-sm text-white rounded-sm font-bold shadow-sm
           hover:brightness-75 transition-all duration-300 ease-in-out
          ${color} ${className} ${
        disabled ? "bg-gray-400 cursor-not-allowed" : color
      } ${className}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
