import Select from "../components/Select";

export default {
  title: "Component/Select",
  component: Select,
  argTypes: {
    label: { defaultValue: "Label", control: "text" },
    placeholder: { defaultValue: "placeholder", control: "text" },
    block: { defaultValue: false, control: "boolean" },
    invalid: { defaultValue: false, control: "boolean" },
    required: { defaultValue: false, control: "boolean" },
    disabled: { defaultValue: false, control: "boolean" },
  },
};

export const Default = (args) => {
  return (
    <Select
      data={["111", "222", "333", "444", "555", "666"]}
      {...args}
    />
  );
};
