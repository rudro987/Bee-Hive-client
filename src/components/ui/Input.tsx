/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormRegister } from "react-hook-form";

export type TInputProps = {
  type?: string;
  label: string;
  register: UseFormRegister<any>;
  placeholder: string;
  name: string;
  valueAsNumber?: boolean;
};

const Input = ({ type, label, placeholder, register, name }: TInputProps) => {

  return (
    <div className="form-control h-">
      <label className="label">
        <span className="text-lg">{label}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, { required: true})}
        className="w-full h-14 leading-6 px-4 border border-primaryFont rounded-lg focus-visible:outline-none"
      />
      
    </div>
  );
};

export default Input;
