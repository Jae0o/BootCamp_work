import PropType from "prop-types";
import Text from "../Text";

const TabItem = ({ title, index, active, ...props }) => {
  const wrapperStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "140px",
    height: "60px",
    backgroundColor: active ? "#ddf" : "#eee",
  };
  return (
    <div
      style={{ ...wrapperStyle }}
      {...props}>
      <Text strong={active}>{title}</Text>
    </div>
  );
};

TabItem.defaultProps = {
  __TYPE: "Tab.Item",
};

TabItem.propTypes = {
  __TYPE: PropType.oneOf(["Tab.Item"]),
};
export default TabItem;
