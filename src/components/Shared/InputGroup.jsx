const InputGroup = ({
    name,
    type = "text",
    placeholder = "Input",
    label = "Your Input",
    onClick,
    inputType = "input",
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
              onChange={onClick}
              name={name}
            ></textarea>
          ) : (
            <input
              type={type}
              name={name}
              placeholder={placeholder}
              className="input input-bordered w-full"
              onChange={onClick}
            />
          )}
        </label>
      </div>
    );
  };
  
  export default InputGroup;