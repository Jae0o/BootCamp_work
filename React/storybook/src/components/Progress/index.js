const containerStyle = {
  position: "relative",
  width: "100%",
  height: "16px",
};
const railStyle = {
  position: "absolute",
  top: "6px",
  left: "0px",
  width: "100%",
  height: "4px",
  borderRadius: "2px",
  backgroundColor: "#aaa",
};

const tarckStyle = {
  position: "absolute",
  top: "6px",
  left: "0px",
  width: "0px",
  height: "4px",
  borderRadius: "2px",
  backgroundColor: "#44b",
  backgroundSize: "40px",
  backgroundImage:
    "linear-gradient(45deg, rgba(255,255,255,0.25) 25% , transparent 25%, transparent 50%,  rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.25) 75%, transparent 75%, transparent 100%",
};

const Progress = ({ value, ...props }) => {
  return (
    <div style={{ ...containerStyle, ...props.style }}>
      <div style={{ ...railStyle }} />
      <div style={{ ...tarckStyle, width: `${value}%` }} />
    </div>
  );
};

export default Progress;
