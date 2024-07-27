import { InputType } from "../../types";

type InputLoginProps = {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  typeInput: InputType;
  className?: string;
  placeholder: string;
  onFocus?: () => void;
  onBlur?: () => void;
};

function Input({
  setValue,
  value,
  typeInput,
  placeholder,
  className,
  onBlur,
  onFocus,
}: InputLoginProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  return (
    <input
      className={`bg-stone-900/55 text-gray-300 placeholder:text-gray-300/80 border border-gray-400 p-3.5 rounded ${className}`}
      value={value}
      placeholder={placeholder}
      type={InputType.Email === typeInput ? "email" : "password"}
      onChange={handleChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
}

export default Input;
