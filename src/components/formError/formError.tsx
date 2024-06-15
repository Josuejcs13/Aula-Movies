import { VscError } from "react-icons/vsc";

type ErrorProp = {
  children: string;
};

const FormError = ({ children }: ErrorProp) => {
  return (
    <div className="flex gap-1 text-red-600 items-center justify-center">
      <VscError />
      <p>{children}</p>
    </div>
  );
};

export default FormError;
