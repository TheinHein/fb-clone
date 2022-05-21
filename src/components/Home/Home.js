import { Button, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import FB from "../../FB";
import CreatePostCard from "../Cards/CreatePostCard";
import PostContainer from "./PostContainer";
import _ from "lodash";
import InfiniteScroll from "react-infinite-scroll-component";

const Home = () => {
  const context = useAuthContext();
  const [posts, setPosts] = useState([]);
  const [globalPostsLastVisible, setGlobalPostsLastVisible] = useState(0);
  const [friendsPostsLastVisible, setFriendsPostsLastVisible] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      await FB.getInitialGlobalPosts(
        context.user.id,
        setPosts,
        setGlobalPostsLastVisible
      );
      await FB.getInitialAllFriendsPosts(
        context.user.id,
        setPosts,
        setFriendsPostsLastVisible
      );
      setLoading(false);
    })();
  }, [context.user.id]);

  const getMorePosts = async () => {
    await FB.getMoreGlobalPosts({
      userId: context.user.id,
      setPosts,
      lastVisible: globalPostsLastVisible,
      setLastVisible: setGlobalPostsLastVisible,
    });
    await FB.getMoreAllFriendsPosts({
      userId: context.user.id,
      setPosts,
      lastVisible: friendsPostsLastVisible,
      setLastVisible: setFriendsPostsLastVisible,
    });
  };

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
        <InfiniteScroll
          dataLength={posts.length}
          next={getMorePosts}
          hasMore={globalPostsLastVisible && friendsPostsLastVisible}
          loader={<PostContainer loading post={{}} />}
        >
          <Stack spacing={1}>
            {posts.map((post) => (
              <PostContainer post={post} loading={loading} key={post.id} />
            ))}
          </Stack>
        </InfiniteScroll>
      )}
    </Stack>
  );
};

export default Home;
