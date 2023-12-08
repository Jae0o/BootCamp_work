import { useCallback, useEffect, useRef, useState } from "react";
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
const handleStyle = {
  position: "absolute",
  top: "8px",
  left: "0px",
  width: "12px",
  height: "12px",
  transform: "translate(-50%, -50%)",
  border: "2px solid #44b",
  backgroundColor: "white",
  borderRadius: "50%",
  cursor: "grab",
};
const tarckStyle = {
  position: "absolute",
  top: "6px",
  left: "0px",
  width: "0px",
  height: "4px",
  borderRadius: "2px",
  backgroundColor: "#44b  ",
};

const Slider = ({ min = 0, max = 100, step = 0.1, defaultValue, onChange, ...props }) => {
  const sliderRef = useRef(null);
  const [dragging, setDraggin] = useState(false);
  const [value, setValue] = useState(defaultValue ? defaultValue : min);

  const handleMouseDown = useCallback(() => {
    setDraggin(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setDraggin(false);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!dragging) return;

      const handleOffset = e.pageX - sliderRef.current.offsetLeft;
      const sliderWidth = sliderRef.current.offsetWidth;
      const track = handleOffset / sliderWidth;

      let newValue;
      if (track < 0) {
        newValue = min;
      } else if (track > 1) {
        newValue = max;
      } else {
        newValue = Math.round((min + (max - min) * track) / step) * step;
        newValue = Math.min(max, Math.max(min, newValue));
      }
      setValue(newValue);
      onChange && onChange(newValue);
    };

    // document 에 이벤트를 연결한 이유는 사용자가 rail에서 마우스가 벗어나도
    // slider가 정상적으로 동작 할 수 있도록 구현함
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [value, min, max, sliderRef, dragging, handleMouseUp, onChange, step]);

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div
      ref={sliderRef}
      style={{ ...containerStyle, ...props.style }}>
      <div style={{ ...railStyle }} />
      <div style={{ ...tarckStyle, width: `${percentage}%` }} />
      <div
        style={{ ...handleStyle, left: `${percentage}%` }}
        onMouseDown={handleMouseDown}
      />
    </div>
  );
};

export default Slider;
