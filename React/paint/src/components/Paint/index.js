import { useCallback, useEffect, useRef, useState } from "react";
import { PenPlugin } from "./plugins/Pen";

const calculateCoord = (e, canvas) => {
  const rect = canvas.getBoundingClientRect();

  return {
    x: e.pageX - rect.left - window.scrollX,
    y: e.pageY - rect.top - window.scrollY,
  };
};

const Paint = ({
  command = "pen",
  color = "#000000",
  lineWidth = "2",
  width = 800,
  height = 600,
  plugins = [new PenPlugin()],
  style,
  className,
}) => {
  const [currnetCommand, setCurrentCommand] = useState(command);
  const [currentLineWidth, setCurrentLineWidth] = useState(lineWidth);
  const [currentColor, setCurrentColor] = useState(color);
  const [currentPlugins, setCurrentPlugins] = useState({});
  const [drawing, setDrawing] = useState(0);
  const canvasRef = useRef();

  // 현재 시스템이 해당 픽셀을 표현하기위한 Ratio값을 알려줌
  const scale = typeof window === "undefined" ? 1 : window.devicePixelRatio;

  const canvaseDefaultStyle = {
    userSelect: "none",
    WebkitUserSelect: "none",
  };

  const canvasSizeStyle = {
    width,
    height,
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    canvasRef.current.width = width * scale;
    canvasRef.current.height = height * scale;
    canvasRef.current.getContext("2d").scale(scale, scale);

    plugins.forEach((plugin) => {
      plugin.canvas = canvasRef.current;
    });

    setCurrentPlugins(
      Object.assign(
        {},
        ...plugins.map((plugin) => ({
          [plugin.name]: plugin,
        }))
      )
    );
  }, [canvasRef.current, scale]);

  const handleDrawStart = useCallback(
    (e) => {
      e.preventDefault();
      if (!drawing) return;

      const { x, y } = calculateCoord(e, canvasRef.current);

      currentPlugins[currnetCommand].draw({
        x,
        y,
        width,
        height,
        scale,
        lineWidth: currentLineWidth,
        color: currentColor,
        state: "draw-started",
      });

      setDrawing(true);
    },
    [currentColor, currentLineWidth, currentPlugins, currnetCommand, drawing, height, scale, width]
  );
  const handleDrawing = useCallback(
    (e) => {
      e.preventDefault();
      if (!drawing) return;

      const { x, y } = calculateCoord(e, canvasRef.current);

      currentPlugins[currnetCommand].draw({
        x,
        y,
        width,
        height,
        scale,
        lineWidth: currentLineWidth,
        color: currentColor,
        state: "drawing",
      });

      setDrawing(true);
    },
    [currentColor, currentLineWidth, currentPlugins, currnetCommand, drawing, height, scale, width]
  );
  const handleDrawFinish = useCallback(
    (e) => {
      e.preventDefault();

      const { x, y } = calculateCoord(e, canvasRef.current);

      currentPlugins[currnetCommand].draw({
        x,
        y,
        width,
        height,
        scale,
        lineWidth: currentLineWidth,
        color: currentColor,
        state: "draw-finished",
      });

      setDrawing(false);
    },
    [currentColor, currentLineWidth, currentPlugins, currnetCommand, height, scale, width]
  );

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={handleDrawStart}
      onMouseMove={handleDrawing}
      onMouseUp={handleDrawFinish}
      style={{ ...canvaseDefaultStyle, ...canvasSizeStyle, ...style }}
      className={className}
    />
  );
};

export default Paint;
