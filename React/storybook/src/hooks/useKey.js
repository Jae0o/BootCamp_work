import { useCallback, useEffect } from "react";

const useKey = (event = "keydown", targetKey, handler) => {
  const keyhandler = useCallback(
    ({ key }) => {
      if (key === targetKey) {
        handler();
      }
    },
    [handler, targetKey]
  );

  useEffect(() => {
    window.addEventListener(event, keyhandler);

    return () => {
      window.removeEventListener(event, keyhandler);
    };
  }, [event, keyhandler]);
};

export default useKey;
