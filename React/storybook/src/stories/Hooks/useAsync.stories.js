import useAsync from "../../hooks/useAsync";

export default {
  title: "Hook/useAsync",
};

const asyncReturnValue = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("is Success");
    }, 1000);
  });
};

export const Success = () => {
  const state = useAsync(async () => {
    return await asyncReturnValue();
  }, []);

  return (
    <div>
      <div> useAsyncFN</div>
      <div>{JSON.stringify(state)}</div>
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
  const state = useAsync(async () => {
    return await asyncReturnError();
  }, []);

  return (
    <div>
      <div> useAsyncFN</div>
      <div>{JSON.stringify(state)}</div>
    </div>
  );
};
