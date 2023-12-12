import useTimeoutFN from "../../hooks/useTimeoutFN";

export default {
  title: "Hook/useTimeoutFN",
};

export const Default = () => {
  const [run, clear] = useTimeoutFN(() => {
    alert("실행");
  }, 3000);
  return (
    <>
      <div> useTimeoutFN test</div>
      <button onClick={run}>3s run</button>
      <button onClick={clear}>stop</button>
    </>
  );
};
