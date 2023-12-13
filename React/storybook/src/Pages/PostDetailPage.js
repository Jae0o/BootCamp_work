import { useParams } from "react-router-dom";
import { useAsync } from "../hooks";
import axios from "axios";
import { Header, Spinner, Text } from "../components";
import { Fragment } from "react";

const PostDetailPage = () => {
  const { id } = useParams();

  const post = useAsync(async () => {
    return await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => console.log(res.data));
  }, []);

  return (
    <div>
      {post.isLoading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Header strong>{post.value?.title}</Header>
          <Text>{post.value?.body}</Text>
        </Fragment>
      )}
    </div>
  );
};

export default PostDetailPage;
