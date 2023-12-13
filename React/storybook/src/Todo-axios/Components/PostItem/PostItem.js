import { useCallback, useState } from "react";
import { Header, Spinner } from "../../../components";
import { usePostContext } from "../../../context/PostProvider";
import { Link } from "react-router-dom";

const PostItem = ({ post }) => {
  const [loading, setLoading] = useState(false);
  const { onDeletePost } = usePostContext();

  const handleDeletePost = useCallback(
    async (id) => {
      setLoading(true);
      await onDeletePost(id);
      setLoading(false);
    },
    [onDeletePost]
  );
  return (
    <li>
      <Header
        strong
        lavel={3}>
        {post.title}
      </Header>
      <Link to={`/posts/${post.id}`}>move Detail</Link>
      <div>
        {loading ? <Spinner /> : <button onClick={() => handleDeletePost(post.id)}>Delete</button>}
      </div>
    </li>
  );
};

export default PostItem;
