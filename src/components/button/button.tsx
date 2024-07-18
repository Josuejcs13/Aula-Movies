type ButtonProps = {
  children: string;
  handleSubmit: () => void;
  isDisable?: boolean;
  className?: string;
  color: string;
};

function Button({
  children,
  handleSubmit,
  isDisable,
  className,
  color,
}: ButtonProps) {
  return (
    <button
      disabled={isDisable}
      className={` py-2 text-white rounded font-medium ${className} ${color} `}
      onClick={handleSubmit}
    >
      {children}
    </button>
  );
}

export default Button;
