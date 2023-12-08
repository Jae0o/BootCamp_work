import useToggle from "../../hooks/useToggle";
import "./index.css";

const Toggle = ({ name, on = false, disabled, onChange, ...props }) => {
  const [checked, toggle] = useToggle(on);

  const handleChange = () => {
    toggle();
    onChange && onChange();
  };
  return (
    <label className="toggleContainer">
      <input
        className="toggleInput"
        type="checkbox"
        name={name}
        checked={checked}
        disabled={disabled}
        onClick={handleChange}
      />
      <div className="toggleSwitch"></div>
    </label>
  );
};

export default Toggle;
