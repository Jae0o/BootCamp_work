import useHotkey from "../../hooks/useHotkey";

export default {
  title: "Hook/useHotKey",
};

export const Default = () => {
  const hotkeys = [
    {
      global: true,
      combo: "alt+k",
      onKeyDown: (e) => {
        alert("alt+k");
      },
    },
    {
      global: true,
      combo: "esc",
      onKeyDown: (e) => {
        alert("esc");
      },
    },
  ];

  useHotkey(hotkeys);
  return <div>useHotkey</div>;
};
