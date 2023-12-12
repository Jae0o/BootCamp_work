import React, { useEffect, useMemo } from "react";
import ReactDOM from "react-dom";
import useClickAway from "../../hooks/useClickAway";

const backgroundStyle = {
  position: "fixed",
  top: "0px",
  left: "0px",
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: "1000",
};

const containerStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50% , -50%)",
  padding: "8px",
  backgroundColor: "white",
  boxShadow: "0 3px 6px rgba(0, 0, 0, 0.2)",
  boxSizing: "border-box",
};

const Modal = ({ children, width = 500, height, visible = false, onClose, ...props }) => {
  const ref = useClickAway(() => {
    onClose && onClose();
  });
  const containerChangeStyle = useMemo(
    () => ({
      width,
      height,
    }),
    [width, height]
  );

  const el = useMemo(() => document.createElement("div"), []);
  useEffect(() => {
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  });

  return ReactDOM.createPortal(
    <div style={{ ...backgroundStyle, display: visible ? "block" : "none" }}>
      <div
        ref={ref}
        style={{ ...containerStyle, ...containerChangeStyle }}>
        {children}
      </div>
    </div>,
    el
  );
};

export default Modal;
