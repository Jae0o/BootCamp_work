import { useEffect } from "react";
import useTimeoutFN from "./useTimeoutFN";

const useTimeout = (fn, ms) => {
  const [run, clear] = useTimeoutFN(fn, ms);

  useEffect(() => {
    run();

    return clear;
  }, [run, clear]);

  return clear;
};

export default useTimeout;
