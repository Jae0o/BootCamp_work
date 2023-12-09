import { useMemo } from "react";
import FluxProvider from "./FluxProvider";

const Row = ({ children, justify, align, gutter, ...props }) => {
  const aliginToCSSValue = {
    top: "flex-start",
    middle: "center",
    bottom: "flex-end",
  };
  const rowStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    boxSizing: "border-box",
    justifyContent: justify,
    alignItems: aliginToCSSValue[align],
  };

  const gutterStyle = useMemo(() => {
    if (Array.isArray(gutter)) {
      const horizontal = gutter[0];
      const vertical = gutter[1];
      return {
        marginTop: `-${vertical / 2}px`,
        marginBottom: `-${vertical / 2}px`,
        marginLeft: `-${horizontal / 2}px`,
        marginRight: `-${horizontal / 2}px`,
      };
    } else {
      return {
        marginLeft: `-${gutter / 2}px`,
        marginRight: `-${gutter / 2}px`,
      };
    }
  }, [gutter]);
  return (
    <FluxProvider gutter={gutter}>
      <div
        style={{ ...rowStyle, ...gutterStyle }}
        {...props}>
        {children}
      </div>
    </FluxProvider>
  );
};

export default Row;
