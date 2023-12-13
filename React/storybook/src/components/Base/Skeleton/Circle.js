import Base from "./Base";

const Circle = ({ size }) => {
  const boxStyle = {
    width: typeof size === "number" ? `${size}px` : size,
    height: typeof size === "number" ? `${size}px` : size,
    borderRadius: "50%",
  };

  return <Base styleProp={boxStyle} />;
};

export default Circle;
