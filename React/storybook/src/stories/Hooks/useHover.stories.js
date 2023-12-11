import useHover from "../../hooks/useHover";

export default {
  title: "Hover/useHover",
};

const boxStyle = {
  width: "200px",
  height: "200px",
  display: " flex",
  backgroundColor: "orange",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
};

export const Default = () => {
  const [ref, hover] = useHover();

  return (
    <div
      ref={ref}
      style={{ ...boxStyle }}>
      {hover ? "True" : "False"}
    </div>
  );
};
