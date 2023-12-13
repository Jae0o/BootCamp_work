import Base from "./Base";

const Box = ({ width, height }) => {
  const boxStyle = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
  };

  return <Base styleProp={boxStyle} />;
};

export default Box;
