import { Stack } from "@mui/material";
import { useGetFriendsPosts } from "../../hooks/useGetFriendsPosts";
import CreatePostCard from "../CreatePostCard";
import Post from "./Post";

function Home() {
  const { posts, loading } = useGetFriendsPosts();

  return (
    <Stack spacing={1} m={1}>
      <CreatePostCard />
      {posts.map((post) => (
        <Post post={post} loading={loading} />
      ))}
    </Stack>
  );
}

export default Home;
