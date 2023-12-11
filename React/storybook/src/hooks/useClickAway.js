const { useRef, useEffect } = require("react");

const useClickAway = (handler) => {
  const events = ["mousedown", "touchstart"];
  const ref = useRef(null);
  const saveHandler = useRef(handler);

  useEffect(() => {
    saveHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const eventHandler = (e) => {
      !element.contains(e.target) && saveHandler.current(e);
    };

    for (const eventName of events) {
      document.addEventListener(eventName, eventHandler);
    }

    return () => {
      for (const eventName of events) {
        document.removeEventListener(eventName, eventHandler);
      }
    };
  }, [ref]);

  return ref;
};

export default useClickAway;
