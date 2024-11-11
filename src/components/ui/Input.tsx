/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormRegister } from "react-hook-form";

export type TInputProps = {
  type?: string;
  label: string;
  register: UseFormRegister<any>;
  placeholder: string;
  value?: string | number;
  name: string;
  valueAsNumber?: boolean;
  required?: boolean;
  className?: string;
};

const Input = ({
  type,
  label,
  placeholder,
  register,
  name,
  value,
  required = false,
}: TInputProps) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="text-lg">{label}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        autoComplete="true"
        {...register(name, { required: required })}
        defaultValue={value}
        className="w-full h-14 leading-6 px-4 border border-primaryFont rounded-lg focus-visible:outline-none"
      />
    </div>
  );
};

export default Input;
