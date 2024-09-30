import { TInputProps } from "./Input";

const TextArea = ({ label, placeholder, name, register }:TInputProps) => {

  return (
    <div className="form-control h-">
      <label className="label">
        <span className="text-lg">{label}</span>
      </label>
      <textarea
        placeholder={placeholder}
        {...register(name!, { required: true})}
        className="w-full h-28 leading-6 px-4 border border-primaryFont rounded-lg focus-visible:outline-none pt-3"
        required
      ></textarea>
    </div>
  );
};

export default TextArea;
