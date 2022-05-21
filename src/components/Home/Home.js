import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import FB from "../../FB";
import CreatePostCard from "../Cards/CreatePostCard";
import PostContainer from "./PostContainer";

const Home = () => {
  const context = useAuthContext();
  const [posts, setPosts] = useState([]);
  const [globalPostsLastVisible, setGlobalPostsLastVisible] = useState(0);
  const [friendsPostsLastVisible, setFriendsPostsLastVisible] = useState(0);

  const [loading, setLoading] = useState(true);
  console.log(globalPostsLastVisible);
  useEffect(() => {
    (async () => {
      setLoading(true);
      await FB.getInitialGlobalPosts(
        context.user.id,
        setPosts,
        setGlobalPostsLastVisible
      );
      // await FB.getAllFriendsPosts(
      //   context.user.id,
      //   setPosts,
      //   setFriendsPostsLastVisible
      // );
      setLoading(false);
    })();
  }, [context.user.id]);

  return (
    <Stack spacing={1} m={1}>
      <CreatePostCard />
      {loading ? (
        <>
          <PostContainer loading post={{}} />
          <PostContainer loading post={{}} />
          <PostContainer loading post={{}} />
        </>
      ) : (
        <>
          {posts.map((post) => (
            <PostContainer post={post} loading={loading} key={post.id} />
          ))}
        </>
      )}
    </Stack>
  );
};

export default Home;
