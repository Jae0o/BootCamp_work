import { useCallback, useEffect, useRef, useState } from "react";

const useHover = () => {
  const [state, setState] = useState();
  const ref = useRef();

  const mouseOverHandler = useCallback(() => {
    setState(true);
  }, []);
  const mouseOutHandler = useCallback(() => {
    setState(false);
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.addEventListener("mouseover", mouseOverHandler);
      element.addEventListener("mouseout", mouseOutHandler);
    }

    return () => {
      element.removeEventListener("mouseover", mouseOverHandler);
      element.removeEventListener("mouseout", mouseOutHandler);
    };
  }, [mouseOutHandler, mouseOverHandler, ref]);

  return [ref, state];
};

export default useHover;
