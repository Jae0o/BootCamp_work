import { useState } from "react";
import useClickAway from "../../hooks/useClickAway";

export default {
  title: "Hook/useClickAway",
};

export const Default = () => {
  const [show, setShow] = useState(false);
  const ref = useClickAway(() => {
    setShow(false);
  });

  const popoverStyle = {
    width: "200px",
    height: "200px",
    border: "2px solid black",
    backgroundColor: "#eee",
    display: show ? "block" : "none",
  };

  return (
    <div>
      <button onClick={() => setShow(true)}>Show</button>
      <div
        ref={ref}
        style={{ ...popoverStyle }}>
        PopOver
      </div>
    </div>
  );
};
