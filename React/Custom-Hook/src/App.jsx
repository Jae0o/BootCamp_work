import useHover from "./hooks/useHover";
import useKeyPress from "./hooks/useKeyPress";
import useToggle from "./hooks/useToggle";

function App() {
  const [on, toggle] = useToggle();
  const [ref, hoverState] = useHover();
  const keyPressed = useKeyPress("a");
  return (
    <>
      <button onClick={toggle}>{on ? "true" : "false "}</button>
      <div
        ref={ref}
        style={{ width: "300px", height: "300px", backgroundColor: "red" }}>
        {hoverState ? "호버중입니다!" : "호버중 아님!"}
      </div>

      <h1> 키 press 테스트 : {keyPressed ? "눌린 상태" : "안 눌린 상태"}</h1>
    </>
  );
}

export default App;
