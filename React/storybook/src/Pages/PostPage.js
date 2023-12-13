import axios from "axios";
import { useAsync } from "../hooks";
import { Spinner, Header } from "../components";
import PostList from "../Todo-axios/Components/PostList/PostList";
import PostProvider from "../context/PostProvider";
import { useCallback } from "react";
import PostAddForm from "../Todo-axios/Components/PostAddForm/PostAddForm";

const TodoApp = () => {
  const initialPosts = useAsync(async () => {
    return await axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => res.data);
  });

  const handleDeletePost = useCallback(async (id) => {
    return await axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(() => ({ id }));
  }, []);

  const handleAddPost = useCallback(async (post) => {
    return await axios
      .post(`https://jsonplaceholder.typicode.com/posts`, post)
      .then((res) => res.data);
  }, []);

  return (
    <PostProvider
      initialPosts={initialPosts.value}
      handleDeletePost={handleDeletePost}
      handleAddPost={handleAddPost}>
      <div>
        <Header>Posts</Header>
        <PostAddForm />
        {initialPosts.isLoading ? <Spinner /> : <PostList />}
      </div>
    </PostProvider>
  );
};
export default TodoApp;
