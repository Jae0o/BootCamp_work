import "./index.css";

const Badge = ({
  children,
  dot = false,
  showZero,
  count,
  maxCount,
  backgroundColor,
  textColor,
  ...props
}) => {
  const colorStyle = {
    backgroundColor,
    color: textColor,
  };

  let badge = null;
  if (count) {
    badge = (
      <sup
        className="badge-super"
        style={colorStyle}>
        {maxCount && count > maxCount ? `${maxCount}+` : count}
      </sup>
    );
  } else {
    if (count !== undefined) {
      badge = showZero ? (
        <sup
          className="badge-super"
          style={colorStyle}>
          0
        </sup>
      ) : null;
    } else if (dot) {
      badge = (
        <sup
          style={colorStyle}
          className="badge-super dot"></sup>
      );
    }
  }
  return (
    <div
      className="badge-container"
      {...props}>
      {children}
      {badge}
    </div>
  );
};

export default Badge;
