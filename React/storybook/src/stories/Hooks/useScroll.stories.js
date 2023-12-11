import useScroll from "../../hooks/useScroll";

export default {
  title: "Hover/useScroll",
};

const boxStyle = {
  width: "400px",
  height: "400px",
  backgroundColor: "orange",
  overflow: "auto",
};

const itemStyle = {
  width: "10000px",
  height: "10000px",
  backgroundImage: "linear-gradient(45deg, #000 0%, #fff 100%)",
};

export const Default = () => {
  const [ref, coord] = useScroll();
  return (
    <>
      {coord.x}
      <div
        ref={ref}
        style={{ ...boxStyle }}>
        <div style={{ ...itemStyle }} />
      </div>
      {coord.y}
    </>
  );
};
