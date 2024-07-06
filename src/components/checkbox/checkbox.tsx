export interface CheckboxProps {
  id: string;
  value: boolean;
  label?: string;
  setValue: (value: boolean) => void;
  defaultChecked?: boolean;
  disabled?: boolean;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  value,
  label,
  setValue,
  defaultChecked,
  disabled,
  className,
}) => (
  <div className={`flex gap-2 cursor-pointer ${className}`}>
    <input
      className="
            cursor-pointer  
            peer relative appearance-none shrink-0 w-4 h-4 border border-gray-200 rounded-sm mt-1 bg-transparent peer 
            focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-blue-100
            checked:bg-gray-300 checked:border-0
            disabled:border-steel-400 disabled:bg-steel-400
          "
      type="checkbox"
      id={id}
      checked={value}
      onChange={(e) => setValue(e.target.checked)}
      disabled={disabled}
      defaultChecked={defaultChecked}
    />
    <svg
      className="absolute w-4 h-4 pointer-events-none hidden peer-checked:block stroke-black mt-1 outline-none"
      fill="#000000"
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#000000"
      strokeWidth="7.4239999999999995"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M103.99951,188.00012a3.98852,3.98852,0,0,1-2.82812-1.17139l-56-55.9956a3.99992,3.99992,0,0,1,5.65625-5.65723l53.17187,53.16748L213.17139,69.1759a3.99992,3.99992,0,0,1,5.65625,5.65723l-112,111.9956A3.98855,3.98855,0,0,1,103.99951,188.00012Z"></path>
      </g>
    </svg>
    <label htmlFor={id} className="text-white cursor-pointer">
      {label}
    </label>
  </div>
);

export default Checkbox;
