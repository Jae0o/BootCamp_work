import "./index.css";

const Divider = ({ type = "horizontal", size = 8, ...props }) => {
  const style = {
    margin: type === "vertical" ? `0 ${size}px` : `${size}px 0`,
  };
  return (
    <hr
      {...props}
      className={type}
      style={{ ...style, ...props.style }}
    />
  );
};

export default Divider;
