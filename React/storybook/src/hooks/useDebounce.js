import { useEffect } from "react";
import useTimeoutFN from "./useTimeoutFN";

const useDebounce = (fn, ms, deps) => {
  const [run, clear] = useTimeoutFN(fn, ms);

  // eslint-disable-next-line
  useEffect(run, deps);

  return clear;
};

export default useDebounce;
