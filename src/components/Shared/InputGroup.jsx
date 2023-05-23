const InputGroup = ({
  name,
  type = "text",
  placeholder = "Input",
  label = "Your Input",
  onChange = () => {},
  inputType = "input",
  required = false,
  disabled = false,
  ...rest
}) => {
  return (
    <div className="form-control w-[48%] mt-4">
      <label className="label">
        <span className="label-text font-medium text-lg">{label}</span>
      </label>
      <label className="input-group">
        {inputType === "textarea" ? (
          <textarea
            className="textarea textarea-bordered h-24 w-full"
            placeholder={placeholder}
            onChange={onChange}
            disabled={disabled}
            required={required}
            name={name}
            {...rest}
          ></textarea>
        ) : (
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            className="input input-bordered w-full"
            onChange={onChange}
            disabled={disabled}
            required={required}
            {...rest}
          />
        )}
      </label>
    </div>
  );
};

export default InputGroup;