import { checkPropTypes } from "prop-types";

const Header = ({ children, level = 1, underline, strong, color, ...props }) => {
  let Tag = `h${level}`;
  if (level < 1 || level > 6) {
    console.warn("헤더 범위 초과");
    Tag = "h1";
  }

  const fontStyle = {
    fontWeight: strong ? "bold" : "normal",
    textDecoration: underline ? "underline" : undefined,
    color,
  };

  return (
    <Tag
      style={{ ...props.style, ...fontStyle }}
      {...props}>
      {children}
    </Tag>
  );
};

Header.checkPropTypes = {
  children: checkPropTypes.node,
  level: checkPropTypes.number,
  strong: checkPropTypes.bool,
  underline: checkPropTypes.bool,
  color: checkPropTypes.string,
};
export default Header;
