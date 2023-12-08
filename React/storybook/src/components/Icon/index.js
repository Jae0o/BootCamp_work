const Icon = ({ name, rotate, size = 16, strokeWidth = 2, color = "#222" }) => {
  const iconContainerStyle = {
    display: "inline-block",
    width: size,
    height: size,
    transform: rotate ? `rotate(${rotate}deg)` : undefined,
  };

  const iconStyle = {
    "stroke-width": strokeWidth,
    stroke: color,
    width: size,
    height: size,
  };
  const icon = require("feather-icons").icons[name];
  const svg = icon ? icon.toSvg(iconStyle) : "";
  const Buffer = require("buffer").Buffer;
  const base64 = Buffer.from(svg, "utf8").toString("base64");
  return (
    <i style={{ ...iconContainerStyle }}>
      <img
        src={`data:image/svg+xml;base64,${base64}`}
        alt={name}
      />
    </i>
  );
};

export default Icon;
