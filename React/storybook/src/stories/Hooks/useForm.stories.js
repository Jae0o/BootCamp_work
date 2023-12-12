import useForm from "../../hooks/useForm";

export default {
  title: "Hook/useForm",
};

export const Default = () => {
  const { isLoading, errors, changeHandle, submitHandle } = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      alert(JSON.stringify(values));
    },
    validate: ({ email, password }) => {
      const errors = {};
      if (!email) errors.email = "이메일 없음";
      if (!password) errors.password = "이메일 없음";
      if (!/^.+@.+\..+$/.test(email)) errors.email = "올바른 이메일 입력 부탁드림";
      return errors;
    },
  });
  return (
    <form onSubmit={submitHandle}>
      <div>
        <input
          name="email"
          type="email"
          placeholder="email"
          onChange={changeHandle}
        />
        {errors.email}
      </div>
      <div>
        <input
          name="password"
          type="password"
          placeholder="password"
          onChange={changeHandle}
        />
      </div>
      {errors.password}
      <button
        type="submit"
        disabled={isLoading}>
        {isLoading ? "로딩중!" : "Submit"}
      </button>
    </form>
  );
};
