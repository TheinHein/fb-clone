import PostCard from "../PostCard";

function PostContainer({ post = {}, loading }) {
  return <PostCard post={post} loading={loading} />;
}

export default PostContainer;
