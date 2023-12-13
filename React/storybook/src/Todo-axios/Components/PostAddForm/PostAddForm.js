import { Spinner } from "../../../components";
import { useForm } from "../../../hooks";
import { usePostContext } from "../../context/PostProvider";

const PostAddForm = () => {
  const { onAddPost } = usePostContext();
  const { isLoading, errors, changeHandle, submitHandle } = useForm({
    initialValues: {
      userId: 1,
      title: "",
      body: "",
    },
    onSubmit: async (values) => {
      await onAddPost(values);
    },
    validate: ({ title, body }) => {
      const errors = {};
      if (!title) errors.title = "제목을 입력해주세요";
      if (!body) errors.body = "내용을 입력해주세요";
      return errors;
    },
  });
  return (
    <form onSubmit={submitHandle}>
      <div>
        <input
          type="text"
          name="title"
          onChange={changeHandle}
        />
        {errors.title}
      </div>
      <div>
        <input
          type="text"
          name="body"
          onChange={changeHandle}
        />
        {errors.body}
      </div>
      {isLoading ? <Spinner /> : <button type="submit">Add</button>}
    </form>
  );
};

export default PostAddForm;
