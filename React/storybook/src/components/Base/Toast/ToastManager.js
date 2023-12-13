// 토스트 컴포넌트
import { v4 } from "uuid";
import { useCallback, useEffect, useState } from "react";
import ToastItem from "./ToastItem";

const containerStyle = {
  position: "fixed",
  top: "16px",
  right: "16px",
  zIndex: "1500",
};

const ToastManager = ({ bind }) => {
  const [toasts, setToasts] = useState([]);

  const createToast = useCallback((message, duration) => {
    const newToast = {
      id: v4(),
      message,
      duration,
    };

    setToasts((oldToasts) => [...oldToasts, newToast]);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((oldToasts) => oldToasts.filter((toast) => toast.id !== id));
  }, []);

  useEffect(() => {
    bind(createToast);
  }, [bind, createToast]);

  return (
    <div style={{ ...containerStyle }}>
      {toasts.map(({ id, message, duration }) => (
        <ToastItem
          id={id}
          message={message}
          duration={duration}
          key={id}
          onDone={() => removeToast(id)}
        />
      ))}
    </div>
  );
};

export default ToastManager;
