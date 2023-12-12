import { useEffect } from "react";
import useAsyncFN from "./useAsyncFN";

const useAsync = (fn, deps) => {
  const [state, callback] = useAsyncFN(fn, deps);

  useEffect(() => {
    callback();
  }, [callback]);

  return state;
};

export default useAsync;
