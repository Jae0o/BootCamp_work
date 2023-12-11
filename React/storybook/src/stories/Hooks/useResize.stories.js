import { useState } from "react";
import Image from "../../components/Image";
import useResize from "../../hooks/useResize";

export default {
  title: "Hook/useResize",
};

const backStyle = {
  width: "100%",
  height: "400px",
  backgroundColor: "blue",
};
export const Default = () => {
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const ref = useResize((rect) => {
    setImageSize({ width: rect.width, height: rect.height });
  });

  return (
    <div
      style={{ ...backStyle }}
      ref={ref}>
      <Image
        width={imageSize.width}
        height={imageSize.height}
        src={"https://picsum.photos/1000"}
        mode={"contain"}
      />
    </div>
  );
};
