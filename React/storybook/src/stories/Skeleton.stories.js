import Skeleton from "../components/Skeleton/index.js";

export default {
  title: "Component/Skeleton",
};

export const Box = (args) => {
  return <Skeleton.Box {...args} />;
};
Box.argTypes = {
  width: { defaultValue: 200, control: "number" },
  height: { defaultValue: 200, control: "number" },
};

export const Circle = (args) => {
  return <Skeleton.Circle {...args} />;
};
Circle.argTypes = {
  size: { defaultValue: 200, control: "number" },
};

export const Paragraph = (args) => {
  return <Skeleton.Paragraph {...args} />;
};
Paragraph.argTypes = {
  line: { defaultValue: 3, control: "number" },
};
