import { Stack } from "@mui/material";
import { Fragment } from "react";
import { useGetFriendsPosts } from "../../hooks/useGetFriendsPosts";
import CreatePostCard from "../CreatePostCard";
import PostContainer from "./PostContainer";

function Home() {
  const { posts, loading } = useGetFriendsPosts();

  return (
    <Stack spacing={1} m={1}>
      <CreatePostCard />
      {loading ? (
        <PostContainer loading />
      ) : (
        <>
          {posts.map((post) => (
            <PostContainer post={post} loading={loading} key={post.id} />
          ))}
        </>
      )}
    </Stack>
  );
}

export default Home;
