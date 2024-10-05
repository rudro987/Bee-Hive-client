import { TInputProps } from "./Input";

const SingleFileInput = ({
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
        className="file-input w-full max-w-xs"
        multiple="true"
      />
    </div>
  );
};

export default SingleFileInput;