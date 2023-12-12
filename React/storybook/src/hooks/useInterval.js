import { useEffect } from "react";
import useIntervalFN from "./useIntervalFN";

const useInterval = (fn, ms) => {
  const [run, clear] = useIntervalFN(fn, ms);

  useEffect(() => {
    run();

    return clear;
  }, [run, clear]);

  return clear;
};

export default useInterval;
