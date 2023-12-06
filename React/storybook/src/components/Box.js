const Box = ({ backgroundColor = "red", width = "100px", height = "100px" }) => {
  const style = {
    backgroundColor,
    width,
    height,
  };
  return <div style={style}></div>;
};

export default Box;
