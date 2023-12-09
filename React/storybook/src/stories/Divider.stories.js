import Divider from "../components/Divider";
import Text from "../components/Text";

export default {
  title: "Component/Divider",
  component: Divider,
};

export const Horizontal = (args) => {
  return (
    <>
      <Text>Top</Text>
      <Divider type="horizontal" />
      <Text>Bottom</Text>
    </>
  );
};

export const Vertical = () => {
  return (
    <>
      <Text>Left</Text>
      <Divider type="vertical" />
      <Text>Right</Text>
    </>
  );
};
