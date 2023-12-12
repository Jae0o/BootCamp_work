import { useState } from "react";
import useIntervalFN from "../../hooks/useIntervalFN";

export default {
  title: "Hook/useIntervalFN",
};

export const Default = () => {
  const [array, setArray] = useState([]);
  const [run, clear] = useIntervalFN(() => {
    setArray([...array, "추가됨"]);
  }, 1000);
  return (
    <>
      <div>useIntervalFN test</div>
      <div>{array}</div>
      <button onClick={run}>start</button>
      <button onClick={clear}>stop</button>
      <button onClick={() => setArray([])}>clear</button>
    </>
  );
};
