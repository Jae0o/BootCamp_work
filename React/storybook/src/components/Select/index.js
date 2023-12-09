const Select = ({
  data,
  label,
  block = false,
  required = false,
  disabled = false,
  invalid = false,
  wrapperProps,
  placeholder,
  ...props
}) => {
  const wrapperStyle = {
    display: block ? "block" : "inline-block",
  };

  const labelStyle = {
    display: "block",
    fontSize: "12px",
  };

  const selectStyle = {
    width: "100%",
    padding: "4px 8px",
    border: `1px solid ${invalid ? "red" : "grey"}`,
    boxSizing: "border-box",
  };

  const formattedData = data.map((item) =>
    typeof item === "string" ? { label: item, value: item } : item
  );

  const options = formattedData.map((item) => (
    <option
      key={item.value}
      value={item.value}>
      {item.value}
    </option>
  ));

  if (placeholder) {
    options.unshift(
      <option
        key="placeholder"
        value=""
        // 히든은 처음에만 표시되어짐!
        hidden>
        {placeholder}
      </option>
    );
  }

  return (
    <div
      style={{ ...wrapperStyle }}
      {...wrapperProps}>
      <label style={{ ...labelStyle }}>{label}</label>
      <select
        onInvalid={invalid}
        required={required}
        disabled={disabled}
        style={{ ...selectStyle }}
        {...props}>
        {options}
      </select>
    </div>
  );
};

export default Select;
