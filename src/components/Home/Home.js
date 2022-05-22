import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import FB from "../../FB";
import CreatePostCard from "../Cards/CreatePostCard";
import PostContainer from "./PostContainer";
import InfiniteScroll from "react-infinite-scroll-component";
import _ from "lodash";

const Home = () => {
  const context = useAuthContext();
  const [posts, setPosts] = useState([]);
  const [globalPostsLastVisible, setGlobalPostsLastVisible] = useState(0);
  const [friendsPostsLastVisible, setFriendsPostsLastVisible] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);

  const handleFriendsPostsLastVisible = (lastVisible) => {
    setFriendsPostsLastVisible((prev) =>
      _.uniqBy(prev.concat(lastVisible), "id")
    );
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      await FB.getInitialGlobalPosts({
        userId: context.user.id,
        setPosts,
        setLastVisible: setGlobalPostsLastVisible,
        setHasMore,
      });
      await FB.getInitialAllFriendsPosts({
        userId: context.user.id,
        setPosts,
        setLastVisible: handleFriendsPostsLastVisible,
        setHasMore,
      });
      setLoading(false);
    })();
  }, [context.user.id]);

  const getMorePosts = async () => {
    await FB.getMoreGlobalPosts({
      userId: context.user.id,
      setPosts,
      lastVisible: globalPostsLastVisible,
      setLastVisible: setGlobalPostsLastVisible,
      setHasMore,
    });
    await FB.getMoreAllFriendsPosts({
      userId: context.user.id,
      setPosts,
      lastVisible: friendsPostsLastVisible,
      setLastVisible: handleFriendsPostsLastVisible,
      setHasMore,
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
          hasMore={hasMore}
          loader={
            <Stack py={1}>
              <PostContainer loading post={{}} />
            </Stack>
          }
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
