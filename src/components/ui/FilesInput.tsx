import { TInputProps } from "./Input";

export type TFilesInputProps = TInputProps & {
  multiple?: boolean;
};

const FilesInput = ({
  type,
  label,
  placeholder,
  register,
  name,
  value,
  required = false,
  multiple = false
}: TFilesInputProps) => {
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
        multiple={multiple}
      />
    </div>
  );
};

export default FilesInput;
