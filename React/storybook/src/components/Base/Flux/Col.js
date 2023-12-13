import { useMemo } from "react";
import { useFlux } from "./FluxProvider";

const Col = ({ children, span, offset, ...props }) => {
  const colStyle = {
    maxWidth: "100% fit-content",
    boxSizing: "border-box",
    width: span && `${(span / 12) * 100}%`,
    marginLeft: offset && `${(offset / 12) * 100}%`,
  };

  const { gutter } = useFlux();
  const gutterStyle = useMemo(() => {
    if (Array.isArray(gutter)) {
      const horizontal = gutter[0];
      const vertical = gutter[1];
      return {
        paddingTop: `${vertical / 2}px`,
        paddingBottom: `${vertical / 2}px`,
        paddingLeft: `${horizontal / 2}px`,
        paddingRight: `${horizontal / 2}px`,
      };
    } else {
      return {
        paddingLeft: `${gutter / 2}px`,
        paddingRight: `${gutter / 2}px`,
      };
    }
  }, [gutter]);

  return (
    <div
      style={{ ...colStyle, ...gutterStyle }}
      {...props}>
      {children}
    </div>
  );
};

export default Col;
