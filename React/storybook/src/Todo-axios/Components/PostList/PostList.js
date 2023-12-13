import { usePostContext } from "../../context/PostProvider.js";
import PostItem from "../PostItem/PostItem.js";

const PostList = () => {
  const { posts } = usePostContext();
  return (
    <ul>
      {posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
        />
      ))}
    </ul>
  );
};

export default PostList;
