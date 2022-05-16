import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import FB from "../../FB";
import CreatePostCard from "../CreatePostCard";
import PostContainer from "./PostContainer";

function Home() {
  const context = useAuthContext();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    FB.getAllFriendsPosts(context.user.id, setPosts);
    setLoading(false);
  }, [context.user.id]);

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
