import useAsyncFN from "../../hooks/useAsyncFN";

export default {
  title: "Hook/useAsyncFN",
};

const asyncReturnValue = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("is Success");
    }, 1000);
  });
};

export const Success = () => {
  const [state, callback] = useAsyncFN(async () => {
    return await asyncReturnValue();
  }, []);

  return (
    <div>
      <div> useAsyncFN</div>
      <div>{JSON.stringify(state)}</div>
      <button
        onClick={callback}
        disabled={state.isLoading}>
        call
      </button>
    </div>
  );
};

const asyncReturnError = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject("is Error");
    }, 1000);
  });
};

export const Error = () => {
  const [state, callback] = useAsyncFN(async () => {
    return await asyncReturnError();
  }, []);

  return (
    <div>
      <div> useAsyncFN</div>
      <div>{JSON.stringify(state)}</div>
      <button
        onClick={callback}
        disabled={state.isLoading}>
        call
      </button>
    </div>
  );
};
