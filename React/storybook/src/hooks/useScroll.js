import { useEffect, useRef } from "react";
import useRafState from "./useRafState";

const useScroll = () => {
  const [state, setState] = useRafState({ x: 0, y: 0 });

  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const scrollHandler = () => {
      setState({
        x: ref.current.scrollLeft,
        y: ref.current.scrollTop,
      });
    };

    element.addEventListener("scroll", scrollHandler, { passive: true });

    return () => {
      element.removeEventListener("scroll", scrollHandler);
    };
  }, [setState]);

  return [ref, state];
};

export default useScroll;
