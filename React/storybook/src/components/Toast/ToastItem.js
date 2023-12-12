import Text from "../Text";
import useTimeout from "../../hooks/useTimeout";
import "./index.css";

const ToastItem = ({ id, message, duration, onDone }) => {
  useTimeout(() => {
    onDone();
  }, duration);
  return (
    <div className="container">
      <div
        className="progressbar"
        style={{ animationDuration: `${duration}ms` }}
      />
      <Text>{message}</Text>
    </div>
  );
};

export default ToastItem;
