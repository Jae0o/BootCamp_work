import useTimeout from "../../hooks/useTimeout";

export default {
  title: "Hook/useTimeout",
};

export const Default = () => {
  const clear = useTimeout(() => {
    alert("실행");
  }, 3000);

  return (
    <>
      <div> useTimeout Test</div>
      <button onClick={clear}>stop</button>
    </>
  );
};
