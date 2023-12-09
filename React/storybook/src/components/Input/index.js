const Input = ({
  label,
  block = false,
  invalid = false,
  required = false,
  disabled = false,
  readOnly = false,
  wrapperProps,
  ...props
}) => {
  const wrapperStyle = {
    display: block ? "block" : "inline-block",
  };
  const labelStyle = {
    display: "block",
    fontSize: "12px",
  };

  const inputStyle = {
    width: "100%",
    padding: "4px 8px",
    border: `1px solid ${invalid ? "red" : "grey"}`,
    borderRadius: "4px",
    boxSizing: "border-box",
  };

  return (
    <div
      style={{ ...wrapperStyle }}
      {...wrapperProps}>
      <label style={{ ...labelStyle }}>{label}</label>
      <input
        style={{ ...inputStyle }}
        onInvalid={invalid}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        {...props}
      />
    </div>
  );
};

export default Input;
