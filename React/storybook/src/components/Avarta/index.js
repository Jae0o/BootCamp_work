import { useEffect, useState } from "react";
import ImageComponent from "../Image";
import AvartaGroup from "./AvartaGroup";

const Avarta = ({
  lazy,
  threshold,
  src,
  size = 70,
  shape = "circle",
  placeholder,
  alt,
  mode = "cover",
  ...props
}) => {
  const ShapeToCssValue = {
    circle: "50%",
    round: "4px",
    square: "0px",
  };
  const AvartaContainerStyle = {
    position: "relative",
    display: "inline-block",
    border: "1px solid #dadada",
    borderRadius: ShapeToCssValue[shape],
    overflow: "hidden",
    transition: "opacity 0.3s",
    backgroundColor: "#eee",
  };

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
  }, [src]);
  return (
    <div
      style={AvartaContainerStyle}
      {...props}>
      <ImageComponent
        block
        lazy={lazy}
        threshold={threshold}
        width={size}
        height={size}
        src={src}
        placeholder={placeholder}
        alt={alt}
        mode={mode}
        style={{ transition: "opacity 1s", opacity: loaded ? 1 : 0 }}
      />
    </div>
  );
};

Avarta.Group = AvartaGroup;
export default Avarta;
