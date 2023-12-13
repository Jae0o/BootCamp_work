import Text from "../Text";
import Icon from "../Icon";

const BreadCrumbItem = ({ children, href, active, __TYPE, ...props }) => {
  const containerStyle = {
    display: "inline-flex",
    alignItems: "center",
  };

  const anchorStyle = {
    color: "inherit",
    textDecoration: "none",
  };
  return (
    <div
      {...props}
      style={{ ...containerStyle }}>
      <a
        href={href}
        style={{ ...anchorStyle }}>
        <Text
          size={14}
          strong={active}>
          {children}
        </Text>
        {!active && (
          <Icon
            name={"chevron-right"}
            size={22}
            strokeWidth={1}
          />
        )}
      </a>
    </div>
  );
};

BreadCrumbItem.defaultProps = {
  __TYPE: "BreadCrumbItem",
};

BreadCrumbItem.prototype = {
  __TYPE: "BreadCrumbItem",
};
export default BreadCrumbItem;
