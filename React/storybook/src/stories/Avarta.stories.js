import Avarta from "../components/Avarta";

export default {
  title: "Component/Avarta",
  component: Avarta,
  argTypes: {
    src: {
      type: { name: "string" },
      defaultValue: "https://picsum.photos/200",
      control: { type: "text" },
    },
    shape: {
      defaultValue: "circle",
      control: "inline-radio",
      options: ["circle", "round", "sqaure"],
    },
    size: {
      defaultValue: 70,
      control: { type: "range", min: 40, max: 200 },
    },
    mode: {
      defaultValue: "cover",
      options: ["cover", "fill", "contain"],
      control: { type: "inline-radio" },
    },
  },
};

export const Default = (args) => {
  return <Avarta {...args} />;
};

export const Group = (args) => {
  return (
    <Avarta.Group>
      <Avarta src={"https://picsum.photos/200?1"} />
      <Avarta src={"https://picsum.photos/200?2"} />
      <Avarta src={"https://picsum.photos/200?3"} />
      <Avarta src={"https://picsum.photos/200?4"} />
      <Avarta src={"https://picsum.photos/200?5"} />
    </Avarta.Group>
  );
};
