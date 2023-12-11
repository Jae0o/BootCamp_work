import useKey from "../../hooks/useKey";

export default {
  title: "Hook/useKey",
};

export const Default = () => {
  useKey("keyup", "q", () => {
    alert("press q");
  });
  return <>useKey</>;
};
