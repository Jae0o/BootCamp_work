import Badge from "../components/Badge";
import Image from "../components/Image";

export default {
  title: "Component/Badge",
  component: Badge,
  argTypes: {
    count: { defaultValue: 10, control: "number" },
    maxCount: { defaultValue: 10, control: "number" },
    backgroundColor: { control: "color" },
    textColor: { control: "color" },
    showZero: { control: "boolean" },
    dot: { control: "boolean" },
  },
};

export const Default = (args) => {
  return (
    <Badge {...args}>
      <Image
        src="https://picsum.photos/60"
        width={60}
        style={{ borderRadius: 8 }}
      />
    </Badge>
  );
};

export const Dot = (args) => {
  return (
    <Badge dot>
      <Image
        src="https://picsum.photos/60"
        width={40}
      />
    </Badge>
  );
};
