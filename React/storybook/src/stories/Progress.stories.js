import Progress from "../components/Progress";

export default {
  title: "Component/Progress",
  component: Progress,
  argTypes: {
    value: { defaultValue: 1, control: "number" },
  },
};

export const Default = (args) => {
  return (
    <div>
      <Progress {...args} />
    </div>
  );
};
