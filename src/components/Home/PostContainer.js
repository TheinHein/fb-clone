import ActivityCard from "../Cards/ActivityCard";
import PostCard from "../Cards/PostCard";

function PostContainer({ post = {}, loading }) {
  return (
    <>
      {post.activity ? (
        <ActivityCard post={post} loading={loading} />
      ) : (
        <PostCard post={post} loading={loading} />
      )}
    </>
  );
}

export default PostContainer;
